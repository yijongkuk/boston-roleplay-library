# Boston Roleplay Library

보스턴 유학 생활을 장소별로 미리 시뮬레이션하는 영어 롤플레잉 스크립트 라이브러리입니다.

## 열기

`index.html`을 브라우저에서 바로 열면 됩니다.

로컬 서버로 보고 싶다면 이 폴더에서 아래 명령을 실행하세요.

```powershell
python -m http.server 5173
```

그다음 브라우저에서 `http://localhost:5173`을 열면 됩니다.

## 현재 구성

- `index.html`: 화면 구조
- `styles.css`: 레이아웃과 디자인
- `app.js`: 검색, 필터, 1분 타이머, 오디오 플레이어, 복사 기능
- `data/cards.js`: 롤플레잉 카드 데이터

## 카드 추가

새 카드는 `data/cards.js`의 `window.ROLEPLAY_CARDS` 배열에 추가하면 됩니다.

완성 카드에는 `versions` 안에 하나의 완성 대화를 넣습니다.

- Complete Natural Dialogue

아웃라인 카드는 장소, 상황, 상대, 목표, topics만 먼저 넣어도 목록에 표시됩니다.

## 음성 파일 생성

완성된 scripted 카드의 WAV 파일은 아래 명령으로 다시 만들 수 있습니다.

```powershell
powershell -ExecutionPolicy Bypass -File tools\generate-audio.ps1 -Force
```

생성된 파일은 `audio/card-001-main.wav`처럼 저장되고, 웹앱의 스크립트 상단 플레이어에서 자동으로 연결됩니다.

현재 Windows에 설치된 영어 TTS 목소리를 사용합니다. 남성 영어 목소리가 설치되어 있지 않으면 가능한 영어 목소리로 대체됩니다.

## OpenAI 자연 음성 생성

OpenAI TTS는 API 비용이 발생합니다. 키를 코드나 채팅에 붙여넣지 말고 Windows 환경변수로 설정하세요.

```powershell
$env:OPENAI_API_KEY="새_API_KEY"
```

가장 안전한 첫 테스트는 001 카드 하나만 생성하는 것입니다.

```powershell
node tools\generate-openai-audio.js --card 001
```

이미 만든 파일을 다시 만들려면 `--force`를 붙입니다.

```powershell
node tools\generate-openai-audio.js --card 001 --force
```

특정 카드의 모든 대화를 만들려면:

```powershell
node tools\generate-openai-audio.js --card 001 --all
```

전체 scripted 카드 001-010을 모두 만들기 전에 비용 감을 보려면:

```powershell
node tools\generate-openai-audio.js --all --dry-run
```

실제로 전체 생성:

```powershell
node tools\generate-openai-audio.js --all
```

생성된 자연 음성은 `audio-natural/card-001-main.wav`처럼 저장됩니다. 웹앱은 `audio-natural` 파일이 있으면 우선 재생하고, 없으면 기존 `audio` 폴더의 로컬 TTS 파일로 대체합니다.
