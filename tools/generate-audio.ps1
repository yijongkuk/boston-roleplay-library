param(
  [string]$OutputDir = (Join-Path $PSScriptRoot "..\audio"),
  [switch]$Force
)

$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Speech

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$exportScript = Join-Path $PSScriptRoot "export-audio-data.js"
$resolvedOutputDir = New-Item -ItemType Directory -Path $OutputDir -Force

$rawJson = & node $exportScript
if ($LASTEXITCODE -ne 0) {
  throw "Could not export card data with Node."
}

$cards = $rawJson | ConvertFrom-Json
$voices = New-Object System.Speech.Synthesis.SpeechSynthesizer
$installedVoices = @($voices.GetInstalledVoices() | ForEach-Object { $_.VoiceInfo })
$voices.Dispose()

$englishVoices = @($installedVoices | Where-Object { $_.Culture.Name -like "en-*" })
if (-not $englishVoices.Count) {
  throw "No English TTS voice is installed on this Windows system."
}

$maleVoice = $englishVoices | Where-Object { $_.Gender -eq "Male" } | Select-Object -First 1
$femaleVoice = $englishVoices | Where-Object { $_.Gender -eq "Female" } | Select-Object -First 1
$fallbackVoice = $englishVoices | Select-Object -First 1

function Get-VoiceName {
  param(
    [string]$Speaker,
    [int]$CardNumber
  )

  if ($Speaker -eq "You") {
    if ($maleVoice) { return $maleVoice.Name }
    return $fallbackVoice.Name
  }

  if (($CardNumber % 2) -eq 0 -and $maleVoice) {
    return $maleVoice.Name
  }

  if ($femaleVoice) { return $femaleVoice.Name }
  return $fallbackVoice.Name
}

function Get-Rate {
  param(
    [string]$Speaker,
    [int]$CardNumber
  )

  if ($Speaker -eq "You") { return [System.Speech.Synthesis.PromptRate]::Slow }
  if (($CardNumber % 2) -eq 0) { return [System.Speech.Synthesis.PromptRate]::Fast }
  return [System.Speech.Synthesis.PromptRate]::Medium
}

$created = 0
$skipped = 0

foreach ($card in $cards) {
  $cardNumber = [int]$card.id

  foreach ($version in $card.versions) {
    $outputPath = Join-Path $resolvedOutputDir.FullName $version.fileName

    if ((Test-Path $outputPath) -and -not $Force) {
      $skipped += 1
      continue
    }

    $synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
    $synth.SetOutputToWaveFile($outputPath)
    $builder = New-Object System.Speech.Synthesis.PromptBuilder

    foreach ($line in $version.lines) {
      $voiceName = Get-VoiceName -Speaker $line.speaker -CardNumber $cardNumber
      $style = New-Object System.Speech.Synthesis.PromptStyle
      $style.Rate = Get-Rate -Speaker $line.speaker -CardNumber $cardNumber

      $builder.StartVoice($voiceName)
      $builder.StartStyle($style)
      $builder.AppendText($line.text)
      $builder.EndStyle()
      $builder.EndVoice()
      $builder.AppendBreak([TimeSpan]::FromMilliseconds(520))
    }

    $synth.Speak($builder)
    $synth.SetOutputToNull()
    $synth.Dispose()
    $created += 1
    Write-Host "Created $($version.fileName)"
  }
}

Write-Host "Audio generation complete. Created: $created. Skipped: $skipped."
Write-Host "English voices found: $($englishVoices.Name -join ', ')"
if (-not $maleVoice) {
  Write-Host "Note: no English male voice was found, so the user's voice used the available English voice."
}
