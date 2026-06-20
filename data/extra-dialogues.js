(function () {
  function lines(items) {
    return items.map(function (item) {
      return { speaker: item[0], text: item[1] };
    });
  }

  const scripts = {
    "011": {
      lines: lines([
        ["Roommate", "Morning. Did you sleep okay after that long flight?"],
        ["You", "Pretty well, actually. I crashed as soon as I showered."],
        ["Roommate", "That sounds about right. Help yourself to coffee if you want."],
        ["You", "Thanks. Is this coffee maker okay to use, or is there a trick to it?"],
        ["Roommate", "Just fill the water here, put a pod in, and hit the big button."],
        ["You", "Perfect. Also, which fridge shelf should I stick to? I don't want to crowd anyone's stuff."],
        ["Roommate", "Use the lower shelf for now. We usually label anything shared."],
        ["You", "Got it. And dishes just go in the dishwasher?"],
        ["Roommate", "Yep, unless it's full. Then just rinse and leave them on the right."],
        ["You", "Easy enough. I'm heading to campus later to figure out paperwork."],
        ["Roommate", "Good luck. First week is a lot."],
        ["You", "Yeah, I'm taking it one errand at a time."]
      ]),
      usefulExpressions: [
        "I crashed as soon as I showered.",
        "Help yourself to coffee.",
        "Is there a trick to it?",
        "Which fridge shelf should I stick to?",
        "I don't want to crowd anyone's stuff.",
        "Easy enough.",
        "One errand at a time."
      ],
      variations: [
        "You ask if the milk is shared.",
        "The dishwasher is full.",
        "You spill a little coffee and need paper towels.",
        "The roommate explains a house rule you did not know.",
        "You ask when people usually cook dinner."
      ],
      practiceTip: "This is shared-living rhythm. Ask small questions early so you do not create awkwardness later."
    },
    "012": {
      lines: lines([
        ["Neighbor", "Morning."],
        ["You", "Morning. I'm Jongkuk. I just moved in upstairs."],
        ["Neighbor", "Oh nice, welcome to the building. I'm Rachel."],
        ["You", "Nice to meet you. I'm still learning my way around."],
        ["Neighbor", "You picked a good area. Pretty quiet, but close to everything."],
        ["You", "That's good to hear. Is there a decent grocery store within walking distance?"],
        ["Neighbor", "Yeah, about ten minutes that way. There's also a smaller market around the corner."],
        ["You", "Great. And is the elevator usually this slow, or is today special?"],
        ["Neighbor", "Honestly, it's always a little dramatic."],
        ["You", "Good to know. I'll build that into my schedule."],
        ["Neighbor", "You'll get used to it."],
        ["You", "Thanks. See you around."]
      ]),
      usefulExpressions: [
        "I just moved in upstairs.",
        "I'm still learning my way around.",
        "within walking distance",
        "around the corner",
        "Is today special?",
        "I'll build that into my schedule.",
        "See you around."
      ],
      variations: [
        "The neighbor asks where you are from.",
        "You ask if the building is quiet at night.",
        "The elevator is broken.",
        "You ask where packages are left.",
        "You cannot remember the neighbor's name."
      ],
      practiceTip: "Neighbor talk should feel light. One useful question plus one small joke is enough."
    },
    "013": {
      lines: lines([
        ["Manager", "Hi there. What can I help you with?"],
        ["You", "Hi, I just moved in, and I wanted to ask a few basic building questions."],
        ["Manager", "Sure. Go ahead."],
        ["You", "First, where do packages usually get delivered? I don't want to miss anything important."],
        ["Manager", "Most packages go to the mailroom. You'll get an email when one arrives."],
        ["You", "Great. And where are trash and recycling?"],
        ["Manager", "Trash is in the back room, recycling is the blue bin next to it."],
        ["You", "Got it. If I have a maintenance issue, should I call or submit a request online?"],
        ["Manager", "Online is best. If it's urgent, call the office."],
        ["You", "Perfect. One last thing - if the heat or hot water acts up, is that considered urgent?"],
        ["Manager", "Hot water, yes. Heat depends on the season, but report it right away."],
        ["You", "Thanks. That's exactly what I needed."]
      ]),
      usefulExpressions: [
        "I wanted to ask a few basic building questions.",
        "I don't want to miss anything important.",
        "Where are trash and recycling?",
        "submit a request online",
        "If it's urgent...",
        "If the heat or hot water acts up...",
        "That's exactly what I needed."
      ],
      variations: [
        "You ask how to reserve the laundry room.",
        "A package is missing.",
        "The mailbox key does not work.",
        "You ask about guest policy.",
        "You need the emergency maintenance number."
      ],
      practiceTip: "Building office English is all about categories: mail, trash, maintenance, urgent, online request."
    },
    "014": {
      lines: lines([
        ["You", "Excuse me, quick question. Do you know where the closest T station is?"],
        ["Passerby", "Yeah, keep going straight for two blocks, then take a left."],
        ["You", "Straight for two blocks, then left?"],
        ["Passerby", "Exactly. You'll see the entrance near the pharmacy."],
        ["You", "Great. Is it walkable with a backpack, or should I just grab a bus?"],
        ["Passerby", "Totally walkable. Maybe eight minutes."],
        ["You", "Perfect. I'm new to Boston, so I'm still getting my bearings."],
        ["Passerby", "No worries. The streets can be weird at first."],
        ["You", "I noticed. They don't quite behave like a grid."],
        ["Passerby", "Not even close."],
        ["You", "Thanks for the help. I appreciate it."],
        ["Passerby", "Sure. Have a good one."]
      ]),
      usefulExpressions: [
        "Quick question.",
        "the closest T station",
        "Straight for two blocks, then left?",
        "Is it walkable?",
        "I'm still getting my bearings.",
        "The streets can be weird at first.",
        "They don't quite behave like a grid."
      ],
      variations: [
        "You ask where the nearest cafe is.",
        "You ask if the street is safe at night.",
        "The passerby gives directions too fast.",
        "You need to cross a confusing intersection.",
        "You ask how long it takes on foot."
      ],
      practiceTip: "When asking directions, repeat the key steps back. It is natural and practical."
    },
    "015": {
      lines: lines([
        ["Staff", "Hi, welcome in. First time here?"],
        ["You", "Yeah, I'm new in the area and wanted to ask about membership options."],
        ["Staff", "Sure. We have monthly memberships and day passes."],
        ["You", "Could I start with a day pass today and decide later?"],
        ["Staff", "Absolutely. It's twenty dollars for the day."],
        ["You", "Sounds good. Do you provide towels, or should I bring my own?"],
        ["Staff", "Bring your own for now, unless you add towel service."],
        ["You", "Got it. Where are the lockers and showers?"],
        ["Staff", "Locker rooms are down the hall on your left. Bring your own lock."],
        ["You", "Okay. And what time do you usually close on weekdays?"],
        ["Staff", "Ten p.m."],
        ["You", "Perfect. I'll do the day pass today."]
      ]),
      usefulExpressions: [
        "First time here?",
        "I'm new in the area.",
        "membership options",
        "Could I start with a day pass?",
        "Do you provide towels?",
        "Bring your own lock.",
        "I'll do the day pass today."
      ],
      variations: [
        "You ask about student discounts.",
        "You ask if there is a contract.",
        "You forgot a lock.",
        "You ask about peak hours.",
        "You ask whether classes are included."
      ],
      practiceTip: "Gym signup talk is transactional. Ask price, towel, locker, shower, hours."
    },
    "016": {
      lines: lines([
        ["You", "Hey, are you using this bench?"],
        ["Member", "Yeah, but I've got one set left."],
        ["You", "No problem. Mind if I work in after that?"],
        ["Member", "Sure, go for it."],
        ["You", "Thanks. I'm still figuring out the layout here."],
        ["Member", "First time at this gym?"],
        ["You", "Yeah, I just moved to Boston. Trying to keep some kind of routine."],
        ["Member", "Smart. This place gets packed after work."],
        ["You", "Good to know. I'll try mornings then."],
        ["Member", "That's the move."],
        ["You", "By the way, do people usually wipe down equipment after each set here?"],
        ["Member", "Yeah, wipes are over there by the column."]
      ]),
      usefulExpressions: [
        "Are you using this bench?",
        "I've got one set left.",
        "Mind if I work in?",
        "Go for it.",
        "I'm still figuring out the layout.",
        "This place gets packed.",
        "That's the move.",
        "wipe down equipment"
      ],
      variations: [
        "The person says they still have several sets.",
        "You ask someone to spot you.",
        "You ask where the wipes are.",
        "You apologize for taking too long.",
        "You ask if a machine is broken."
      ],
      practiceTip: "Gym English is short and polite. 'Mind if I work in?' is the golden phrase."
    },
    "017": {
      lines: lines([
        ["You", "Hi, sorry to bother you. My locker won't open."],
        ["Staff", "No problem. Do you remember the code you set?"],
        ["You", "I thought I did, but it keeps rejecting it."],
        ["Staff", "Which locker number?"],
        ["You", "Number 42, right by the showers."],
        ["Staff", "Okay, I'll come take a look. Do you have an ID with you?"],
        ["You", "My wallet is inside the locker, but I can show you my phone and membership email."],
        ["Staff", "That works. Happens all the time."],
        ["You", "Thanks. I was worried I had done something wrong."],
        ["Staff", "No, these locks are just picky."],
        ["You", "Good to know. I appreciate the help."],
        ["Staff", "Of course."]
      ]),
      usefulExpressions: [
        "Sorry to bother you.",
        "My locker won't open.",
        "It keeps rejecting it.",
        "Which locker number?",
        "My wallet is inside the locker.",
        "That works.",
        "Happens all the time.",
        "These locks are just picky."
      ],
      variations: [
        "You forgot your locker number.",
        "You lost your towel.",
        "Your phone is locked inside.",
        "You ask about lost and found.",
        "Another member may have taken your locker by mistake."
      ],
      practiceTip: "When something goes wrong, start with the problem, location, and what you have already tried."
    },
    "018": {
      lines: lines([
        ["Barista", "Hi, what can I get started for you?"],
        ["You", "Could I get an iced latte, medium, please?"],
        ["Barista", "Sure. Any milk preference?"],
        ["You", "Whole milk is fine. Actually, do you have oat milk?"],
        ["Barista", "We do. It's a dollar extra."],
        ["You", "That's fine. I'll do oat milk then."],
        ["Barista", "For here or to go?"],
        ["You", "For here, please. I'm going to sit and do some work."],
        ["Barista", "Can I get a name?"],
        ["You", "Jongkuk. It's spelled J-O-N-G-K-U-K."],
        ["Barista", "Got it. You can tap whenever you're ready."],
        ["You", "Thanks. Could I get the receipt too?"]
      ]),
      usefulExpressions: [
        "What can I get started for you?",
        "Any milk preference?",
        "Whole milk is fine.",
        "I'll do oat milk then.",
        "For here or to go?",
        "I'm going to sit and do some work.",
        "It's spelled...",
        "You can tap whenever you're ready."
      ],
      variations: [
        "The barista mishears your name.",
        "You ask if there is Wi-Fi.",
        "You ask for less ice.",
        "Your card does not tap the first time.",
        "You ask whether refills are available."
      ],
      practiceTip: "Cafe ordering is rhythm. Practice the order as one clean chunk: drink, size, milk, here/to go, name."
    },
    "019": {
      lines: lines([
        ["You", "Excuse me, is anyone sitting here?"],
        ["Customer", "No, go ahead."],
        ["You", "Thanks. Also, do you mind if I use this outlet?"],
        ["Customer", "Not at all. I was just about to unplug anyway."],
        ["You", "Perfect. I just need to charge my laptop for a bit."],
        ["Customer", "Are you working on school stuff?"],
        ["You", "Yeah, I'm starting a PhD program, so I'm trying to get organized before classes hit."],
        ["Customer", "Good luck. That's a lot."],
        ["You", "Thanks. I'm trying not to panic on day two."],
        ["Customer", "Reasonable goal."],
        ["You", "One quick favor - if I run to grab my drink, could you keep an eye on my bag?"],
        ["Customer", "Sure, no problem."]
      ]),
      usefulExpressions: [
        "Is anyone sitting here?",
        "Go ahead.",
        "Do you mind if I use this outlet?",
        "I was just about to unplug.",
        "I need to charge my laptop for a bit.",
        "before classes hit",
        "I'm trying not to panic.",
        "Could you keep an eye on my bag?"
      ],
      variations: [
        "The seat is taken.",
        "The outlet does not work.",
        "You ask someone to watch your laptop briefly.",
        "Someone asks what you are studying.",
        "The cafe is too loud and you ask about a quieter corner."
      ],
      practiceTip: "This is polite interruption English. Keep the first line soft and specific."
    },
    "020": {
      lines: lines([
        ["You", "Hi, do you know where I can find laundry detergent?"],
        ["Staff", "Aisle seven, near the cleaning supplies."],
        ["You", "Thanks. And do you carry small packs of rice, or only the big bags?"],
        ["Staff", "Small bags are in aisle four, bottom shelf."],
        ["You", "Great. I'm setting up a new place, so I'm buying all the basics at once."],
        ["Staff", "That first grocery trip is always expensive."],
        ["You", "I'm learning that very quickly."],
        ["Cashier", "Do you have a rewards number with us?"],
        ["You", "Not yet. Can I sign up later?"],
        ["Cashier", "Sure. Do you need bags?"],
        ["You", "Yes, please. Two bags should be enough."],
        ["Cashier", "Receipt in the bag?"],
        ["You", "Yes, please. Thank you."]
      ]),
      usefulExpressions: [
        "Where can I find laundry detergent?",
        "near the cleaning supplies",
        "Do you carry small packs of rice?",
        "I'm setting up a new place.",
        "all the basics at once",
        "Do you have a rewards number?",
        "Can I sign up later?",
        "Receipt in the bag?"
      ],
      variations: [
        "You use self-checkout and need help.",
        "You cannot find a price tag.",
        "The cashier asks if you want paper or plastic.",
        "You ask where reusable bags are.",
        "One item does not scan."
      ],
      practiceTip: "Grocery English repeats a lot. Item location, rewards number, bags, receipt."
    },
    "021": {
      lines: lines([
        ["Security", "Hi. Can I help you?"],
        ["You", "Hi, I'm a new PhD student, and I'm trying to find the architecture department."],
        ["Security", "Do you have a student ID yet?"],
        ["You", "Not yet. I just arrived, so I'm still getting set up."],
        ["Security", "No problem. Which building are you looking for?"],
        ["You", "I believe it's the school of architecture building, but I'm not sure which entrance to use."],
        ["Security", "Go through this courtyard, then take the second door on your right."],
        ["You", "Courtyard, second door on the right?"],
        ["Security", "Exactly. The department office is on the third floor."],
        ["You", "Great. Is there an elevator?"],
        ["Security", "Yes, just inside the entrance."],
        ["You", "Thanks. First day, so I'm trying not to look completely lost."]
      ]),
      usefulExpressions: [
        "I'm a new PhD student.",
        "I'm still getting set up.",
        "Which entrance should I use?",
        "Go through this courtyard.",
        "second door on your right",
        "Is there an elevator?",
        "I'm trying not to look completely lost."
      ],
      variations: [
        "Security asks for your appointment email.",
        "You go to the wrong building.",
        "The entrance requires card access.",
        "You ask a student for directions instead.",
        "You need directions to the international office first."
      ],
      practiceTip: "Campus entrance talk is official but friendly. Say who you are, what you need, and what you do not have yet."
    },
    "022": {
      lines: lines([
        ["Advisor", "Hi, come on in. How can I help?"],
        ["You", "Hi, I'm a new international PhD student. I wanted to make sure I'm not missing any required steps."],
        ["Advisor", "Good idea. Have you checked in with your I-20 and passport yet?"],
        ["You", "I have them with me. Should I upload copies somewhere, or do you need to see them in person?"],
        ["Advisor", "We'll verify them here, and then you'll update your local address online."],
        ["You", "Okay. I'm in temporary housing for now. Is that address okay, or should I wait until I move?"],
        ["Advisor", "Use the temporary address now, then update it when you move."],
        ["You", "Got it. I also wanted to ask about health insurance. Is enrollment automatic?"],
        ["Advisor", "For most full-time students, yes, but double-check your student portal."],
        ["You", "Perfect. And orientation - is there anything I should do before attending?"],
        ["Advisor", "Bring your laptop and any questions you have."],
        ["You", "Great. Thanks for helping me get my footing."]
      ]),
      usefulExpressions: [
        "I wanted to make sure I'm not missing any required steps.",
        "I have them with me.",
        "Should I upload copies somewhere?",
        "temporary housing",
        "Use the temporary address now.",
        "Is enrollment automatic?",
        "student portal",
        "get my footing"
      ],
      variations: [
        "You do not have a permanent address yet.",
        "You ask about travel signatures.",
        "You ask what to do if your visa information changes.",
        "You are confused about health insurance.",
        "You need emergency contact guidance."
      ],
      practiceTip: "International office English rewards precision. Use 'temporary address now, update later' until it feels automatic."
    },
    "023": {
      lines: lines([
        ["Administrator", "Hi there. What can I do for you?"],
        ["You", "Hi, I'm Jongkuk, one of the new PhD students in architecture."],
        ["Administrator", "Welcome. Have you met your advisor yet?"],
        ["You", "Not yet. I have a meeting scheduled later this week, but I wanted to check in with the department first."],
        ["Administrator", "Good. We can add you to the mailing list and confirm your studio assignment."],
        ["You", "That would be great. I don't want to miss any first-week announcements."],
        ["Administrator", "What's your university email?"],
        ["You", "It's still being activated. Can I give you my personal email for now and update it later?"],
        ["Administrator", "Sure. Just send us the university one when it's active."],
        ["You", "Perfect. Also, is there a recommended process for course registration?"],
        ["Administrator", "Talk to your advisor first, then submit your selections online."],
        ["You", "Got it. Thanks. I'm trying to start on the right foot."]
      ]),
      usefulExpressions: [
        "one of the new PhD students",
        "I wanted to check in with the department.",
        "mailing list",
        "studio assignment",
        "I don't want to miss any announcements.",
        "It's still being activated.",
        "Can I update it later?",
        "start on the right foot"
      ],
      variations: [
        "Your university email is not active.",
        "You ask about a studio desk.",
        "You ask who handles course registration.",
        "You ask about department orientation.",
        "The administrator asks for your student ID number."
      ],
      practiceTip: "Department office conversations are relationship-building. Be organized, appreciative, and clear."
    },
    "024": {
      lines: lines([
        ["Staff", "Hi, are you here for a student ID?"],
        ["You", "Yes. I'm a new PhD student, and I was told to come here after check-in."],
        ["Staff", "Great. Can I see a photo ID?"],
        ["You", "Sure, here's my passport."],
        ["Staff", "Thanks. Can you confirm your full name?"],
        ["You", "Jongkuk Yi. The spelling should match my passport."],
        ["Staff", "Perfect. We'll take a quick photo. You can stand against the wall there."],
        ["You", "No problem. Should I take my glasses off?"],
        ["Staff", "Either way is fine."],
        ["You", "Okay. Also, will this card give me building access right away?"],
        ["Staff", "Library access starts today. Department access may take a day or two."],
        ["You", "Good to know. Thanks for explaining that."]
      ]),
      usefulExpressions: [
        "I was told to come here after check-in.",
        "Can I see a photo ID?",
        "The spelling should match my passport.",
        "We'll take a quick photo.",
        "Should I take my glasses off?",
        "building access",
        "may take a day or two",
        "Good to know."
      ],
      variations: [
        "Your name is misspelled.",
        "The photo system is down.",
        "You ask about library access.",
        "Your department access is not active.",
        "You lose the card later."
      ],
      practiceTip: "ID office English is full of confirmation. Practice spelling your name calmly."
    },
    "025": {
      lines: lines([
        ["Librarian", "Hi. Do you need help finding something?"],
        ["You", "Yes, I'm new here, and I'm trying to figure out how the library works."],
        ["Librarian", "Of course. Are you a student?"],
        ["You", "Yes, I'm starting a PhD in architecture."],
        ["Librarian", "Great. Your student ID should let you borrow books and use the printers."],
        ["You", "Perfect. Where would I find architecture books or journals?"],
        ["Librarian", "Architecture is mostly on the third floor, and some journals are online."],
        ["You", "Is there a quiet area where I can read for a few hours?"],
        ["Librarian", "The reading room upstairs is best for that."],
        ["You", "Thanks. And if I need to scan something, is that self-service?"],
        ["Librarian", "Yes, but ask at the desk if the scanner gives you trouble."],
        ["You", "Great. This helps a lot."]
      ]),
      usefulExpressions: [
        "I'm trying to figure out how the library works.",
        "Your student ID should let you...",
        "borrow books",
        "Architecture is mostly on the third floor.",
        "some journals are online",
        "quiet area",
        "self-service",
        "if the scanner gives you trouble"
      ],
      variations: [
        "You ask how long you can borrow books.",
        "You ask about interlibrary loan.",
        "You cannot log in to the printer.",
        "You ask if photos are allowed.",
        "You ask for a research librarian."
      ],
      practiceTip: "Library English is an excellent place to practice calm, precise questions."
    },
    "026": {
      lines: lines([
        ["You", "Hi, sorry, I think I'm doing something wrong with the printer."],
        ["Staff", "What are you trying to print?"],
        ["You", "A PDF for class. I sent it from my laptop, but it isn't showing up in the queue."],
        ["Staff", "Are you logged in with your school account?"],
        ["You", "I thought I was, but maybe I'm using my personal email."],
        ["Staff", "That would do it. Try signing out and back in with your university login."],
        ["You", "Okay. Also, how do I choose black and white instead of color?"],
        ["Staff", "Open print settings before you send the job. Color costs more."],
        ["You", "Good catch. I definitely don't need color for this."],
        ["Staff", "Once it appears in the queue, tap your ID here."],
        ["You", "Got it. Thanks for walking me through it."],
        ["Staff", "No problem. It trips everyone up the first time."]
      ]),
      usefulExpressions: [
        "I think I'm doing something wrong.",
        "It isn't showing up in the queue.",
        "Are you logged in with your school account?",
        "That would do it.",
        "black and white instead of color",
        "Color costs more.",
        "tap your ID here",
        "Thanks for walking me through it."
      ],
      variations: [
        "The paper size is wrong.",
        "You need to scan to email.",
        "The printer is out of paper.",
        "Your ID card does not work.",
        "You accidentally print in color."
      ],
      practiceTip: "Tech-help English works best when you say what you tried and what failed."
    },
    "027": {
      lines: lines([
        ["Classmate", "Hey, are you new to the studio?"],
        ["You", "Yeah, I'm Jongkuk. I'm starting the PhD program this semester."],
        ["Classmate", "Nice. I'm Maya. What were you doing before this?"],
        ["You", "I worked in architecture and research in Korea. I'm interested in housing, urban systems, and how design actually meets daily life."],
        ["Classmate", "That's a good mix. Do you have a studio desk yet?"],
        ["You", "I think so, but I'm still figuring out where everything is."],
        ["Classmate", "That empty one near the window might be yours."],
        ["You", "That would be great. Natural light is never a bad thing."],
        ["Classmate", "True. Are you more of a model person or a drawing person?"],
        ["You", "Probably both, but I need time to get used to the tools here."],
        ["Classmate", "You'll be fine. First week is just controlled chaos."],
        ["You", "Controlled chaos sounds about right."]
      ]),
      usefulExpressions: [
        "I'm starting the PhD program this semester.",
        "What were you doing before this?",
        "I'm interested in...",
        "how design actually meets daily life",
        "I'm still figuring out where everything is.",
        "Natural light is never a bad thing.",
        "model person or drawing person",
        "controlled chaos"
      ],
      variations: [
        "You ask where to store materials.",
        "A classmate asks about your research.",
        "You talk about Korea briefly.",
        "You ask how late people stay in studio.",
        "You ask about studio culture."
      ],
      practiceTip: "Studio introductions can carry your identity. Keep one concise line about your interests ready."
    },
    "028": {
      lines: lines([
        ["Professor", "Come in. It's nice to finally meet you in person."],
        ["You", "Thank you, Professor. I'm glad to be here. I've been looking forward to this."],
        ["Professor", "How was the move to Boston?"],
        ["You", "A little overwhelming, but manageable. I'm still finding my rhythm."],
        ["Professor", "That's completely normal. Tell me a bit about your research interests."],
        ["You", "I'm interested in housing systems, urban everyday life, and how architecture can respond to long-term social change."],
        ["Professor", "That's a broad area. What questions are you carrying into the program?"],
        ["You", "I'm trying to understand how design decisions scale - from a room, to a building, to a neighborhood."],
        ["Professor", "Good. We'll help you sharpen that."],
        ["You", "I appreciate that. Also, my spoken English is still catching up, so I may ask for clarification sometimes."],
        ["Professor", "Please do. Clarity matters more than speed."],
        ["You", "Thank you. That helps me feel more comfortable starting out."]
      ]),
      usefulExpressions: [
        "I've been looking forward to this.",
        "I'm still finding my rhythm.",
        "Tell me a bit about...",
        "research interests",
        "questions you are carrying into the program",
        "how design decisions scale",
        "spoken English is still catching up",
        "Clarity matters more than speed."
      ],
      variations: [
        "The professor asks for a shorter research summary.",
        "You ask how often to meet.",
        "You ask about recommended readings.",
        "You explain professional experience in Korea.",
        "You ask how to prepare for seminars."
      ],
      practiceTip: "Advisor talk should be honest and forward-looking. Say your interest, your question, and your learning need."
    },
    "029": {
      lines: lines([
        ["Professor", "Let's go around and introduce ourselves briefly."],
        ["You", "Hi everyone. I'm Jongkuk, and I'm from Korea."],
        ["You", "I'm starting the PhD program in architecture this semester."],
        ["You", "My background is in architecture and design research, and I'm especially interested in housing, urban systems, and everyday life."],
        ["Classmate", "When you say everyday life, what do you mean?"],
        ["You", "I mean the ordinary routines that buildings quietly shape - how people cook, rest, commute, gather, or feel at home."],
        ["Professor", "That's a useful framing."],
        ["You", "Thanks. I'm still new to Boston, so I'm also looking forward to learning from the city itself."],
        ["Classmate", "Have you been here before?"],
        ["You", "Only briefly. So if I look lost for the first few weeks, that's probably accurate."],
        ["Classmate", "You'll fit right in."],
        ["You", "Glad to hear it. I'm excited to work with everyone."]
      ]),
      usefulExpressions: [
        "Let's go around and introduce ourselves.",
        "My background is in...",
        "I'm especially interested in...",
        "When you say..., what do you mean?",
        "the ordinary routines that buildings quietly shape",
        "useful framing",
        "learning from the city itself",
        "I'm excited to work with everyone."
      ],
      variations: [
        "You need to make the introduction shorter.",
        "Someone asks about your previous work.",
        "You forget a word and rephrase.",
        "The professor asks a follow-up question.",
        "You mention your English level naturally."
      ],
      practiceTip: "A good self-introduction has one clean identity sentence and one memorable idea."
    },
    "030": {
      lines: lines([
        ["You", "Hey, sorry, did I hear the assignment correctly?"],
        ["Classmate", "The reading response? Yeah, it's due next Tuesday."],
        ["You", "Next Tuesday, got it. Is it just a short response, or more like a formal paper?"],
        ["Classmate", "Short response. Around 500 words, I think."],
        ["You", "Perfect. I missed that part because the professor moved pretty quickly."],
        ["Classmate", "Same. I wrote it down because I knew I'd forget."],
        ["You", "Smart. Are the readings already uploaded?"],
        ["Classmate", "Yeah, on the course site under Week One."],
        ["You", "Thanks. I'm still learning where everything lives online."],
        ["Classmate", "No worries. The course site is a little messy."],
        ["You", "Would you be open to comparing notes sometime?"],
        ["Classmate", "Sure. Let's exchange emails after class."]
      ]),
      usefulExpressions: [
        "Did I hear the assignment correctly?",
        "due next Tuesday",
        "formal paper",
        "I missed that part.",
        "The professor moved pretty quickly.",
        "Are the readings already uploaded?",
        "where everything lives online",
        "comparing notes",
        "Let's exchange emails."
      ],
      variations: [
        "You ask about a deadline.",
        "You ask where readings are posted.",
        "You ask if a classmate wants to study together.",
        "The professor's instructions were unclear.",
        "You ask about citation format."
      ],
      practiceTip: "Classmate help is easier when you admit the exact piece you missed."
    },
    "031": {
      lines: lines([
        ["Server", "Hi, what can I get for you?"],
        ["You", "Could I get the rice bowl, please?"],
        ["Server", "Chicken, tofu, or vegetables?"],
        ["You", "Tofu, please. Does the sauce have nuts in it?"],
        ["Server", "No nuts, but it does have sesame."],
        ["You", "Sesame is fine. Could I get the sauce on the side?"],
        ["Server", "Sure. Anything to drink?"],
        ["You", "Just water, thanks."],
        ["Student", "Is this seat taken?"],
        ["You", "No, go ahead."],
        ["Student", "Thanks. Are you in the architecture program?"],
        ["You", "Yeah, first week. I'm still figuring out the food situation and everything else."],
        ["Student", "This place is decent when you're in a hurry."],
        ["You", "Good to know. I need a few reliable options."]
      ]),
      usefulExpressions: [
        "Could I get the rice bowl?",
        "Does the sauce have nuts in it?",
        "Could I get the sauce on the side?",
        "Just water, thanks.",
        "Is this seat taken?",
        "Go ahead.",
        "I'm still figuring out the food situation.",
        "reliable options"
      ],
      variations: [
        "You ask about vegetarian options.",
        "You ask if a dish is spicy.",
        "You ask to sit with other students.",
        "Someone asks about Korean food.",
        "You need food to go."
      ],
      practiceTip: "Food ordering plus table talk is a daily confidence builder."
    },
    "032": {
      lines: lines([
        ["Technician", "Have you used the laser cutter before?"],
        ["You", "I've used similar equipment, but not this exact setup."],
        ["Technician", "Then you'll need to complete the safety training first."],
        ["You", "Of course. Is that online, or do I need to attend a session in person?"],
        ["Technician", "Both. Watch the online module, then book a short in-person checkout."],
        ["You", "Got it. I'm hoping to use it for an architectural model later this semester."],
        ["Technician", "That's pretty common. Just check material restrictions before you buy anything."],
        ["You", "Good point. Are chipboard and basswood usually okay?"],
        ["Technician", "Yes, but no PVC, and no mystery plastics."],
        ["You", "No mystery plastics. Easy to remember."],
        ["Technician", "Once you're cleared, you can reserve time through the portal."],
        ["You", "Perfect. Thanks for helping me avoid a beginner mistake."]
      ]),
      usefulExpressions: [
        "not this exact setup",
        "complete the safety training",
        "book a short in-person checkout",
        "material restrictions",
        "before you buy anything",
        "basswood",
        "no mystery plastics",
        "reserve time through the portal",
        "beginner mistake"
      ],
      variations: [
        "You ask about 3D printing.",
        "You ask about woodshop access.",
        "Your file format is wrong.",
        "You ask how far in advance to reserve.",
        "You ask what materials are banned."
      ],
      practiceTip: "Makerspace English is safety-first. Show respect for the process and ask before assuming."
    },
    "033": {
      lines: lines([
        ["Critic", "Can you walk us through your idea?"],
        ["You", "Sure. The project looks at temporary housing as a system, not just as a single building."],
        ["Critic", "What is the main problem you're responding to?"],
        ["You", "I'm focusing on the gap between emergency shelter and long-term housing - the period where people are technically housed but still unsettled."],
        ["Critic", "How does that show up spatially?"],
        ["You", "Through shared thresholds, flexible rooms, and small routines that help residents regain a sense of control."],
        ["Classmate", "What does the modular system do?"],
        ["You", "It lets units adjust over time without forcing the whole structure to be rebuilt."],
        ["Critic", "Your concept is clear, but the drawings need to show the everyday use more directly."],
        ["You", "That's helpful. So I should make the daily scenarios more visible, not just the structural logic."],
        ["Critic", "Exactly."],
        ["You", "Great. I'll revise the sequence around how people actually move through the space."]
      ]),
      usefulExpressions: [
        "Can you walk us through your idea?",
        "not just as a single building",
        "the gap between...",
        "technically housed but still unsettled",
        "How does that show up spatially?",
        "regain a sense of control",
        "adjust over time",
        "make the daily scenarios more visible"
      ],
      variations: [
        "A critic challenges your concept.",
        "You do not understand a critique question.",
        "You explain a drawing.",
        "You defend a design choice politely.",
        "You summarize feedback before responding."
      ],
      practiceTip: "Review English is not about perfect grammar. It is about concept, evidence, and calm response."
    }
  };

  const moreScripts = {
    "034": {
      lines: lines([
        ["Server", "Hi, just one tonight?"],
        ["You", "Yes, just me. A small table is fine."],
        ["Server", "No problem. Would you like to sit here or at the bar?"],
        ["You", "Here is great, thanks. I'm still getting used to the neighborhood."],
        ["Server", "First time in?"],
        ["You", "Yeah. Do you have anything you recommend that's not too heavy?"],
        ["Server", "The grilled chicken bowl is popular, and the soup is good if you want something lighter."],
        ["You", "I'll do the soup and maybe a side of rice if that's possible."],
        ["Server", "Sure. Any allergies?"],
        ["You", "No allergies. Could you make it not too spicy?"],
        ["Server", "Absolutely."],
        ["You", "Thanks. And I may get the rest to go if I can't finish it."]
      ]),
      usefulExpressions: [
        "Just one tonight?",
        "A small table is fine.",
        "First time in?",
        "not too heavy",
        "if that's possible",
        "Any allergies?",
        "not too spicy",
        "get the rest to go"
      ],
      variations: [
        "You ask for takeout.",
        "You ask for the check.",
        "The dish is too spicy.",
        "You ask for a recommendation.",
        "You split the bill with a classmate."
      ],
      practiceTip: "Restaurant English is mostly soft preferences. Practice 'if that's possible' until it feels easy."
    },
    "035": {
      lines: lines([
        ["You", "Hi, is this the end of the line?"],
        ["Customer", "Yeah, you're good."],
        ["You", "Thanks. I'm still figuring out how this works."],
        ["Staff", "Next! What can I get you?"],
        ["You", "Could I get the chicken over rice?"],
        ["Staff", "White sauce, hot sauce?"],
        ["You", "White sauce, please. Just a little hot sauce on the side."],
        ["Staff", "Anything to drink?"],
        ["You", "No, that's all. How long is the wait usually?"],
        ["Staff", "About five minutes."],
        ["You", "Perfect. Can I pay by card?"],
        ["Staff", "Yep, tap right there."],
        ["You", "Thanks. I'll wait over here."]
      ]),
      usefulExpressions: [
        "Is this the end of the line?",
        "You're good.",
        "What can I get you?",
        "over rice",
        "on the side",
        "How long is the wait?",
        "Can I pay by card?",
        "I'll wait over here."
      ],
      variations: [
        "You ask what is popular.",
        "You cannot hear the sauce options.",
        "You ask if the food is spicy.",
        "The line is confusing.",
        "You need to order quickly."
      ],
      practiceTip: "Food-truck English is fast. Decide your order before you reach the window."
    },
    "036": {
      lines: lines([
        ["You", "Hi, do you know where the gochujang is?"],
        ["Staff", "Korean sauces are in aisle three, near the soy sauce."],
        ["You", "Great, thank you. I'm also looking for short-grain rice."],
        ["Staff", "Big bags are in the back. Smaller bags are on the lower shelf."],
        ["You", "Perfect. I'm setting up my kitchen, so I'm trying not to buy too much at once."],
        ["Staff", "Makes sense."],
        ["You", "Do you carry kimchi in smaller containers?"],
        ["Staff", "Yes, refrigerated section, right side."],
        ["Cashier", "Do you need a bag?"],
        ["You", "Yes, please. Just one bag should be fine."],
        ["Cashier", "Receipt?"],
        ["You", "Yes, thanks. This makes me feel a little more settled already."]
      ]),
      usefulExpressions: [
        "Where is the gochujang?",
        "short-grain rice",
        "I'm setting up my kitchen.",
        "trying not to buy too much at once",
        "smaller containers",
        "refrigerated section",
        "Just one bag should be fine.",
        "feel a little more settled"
      ],
      variations: [
        "You ask for ramen recommendations.",
        "You ask if something is spicy.",
        "You ask where frozen dumplings are.",
        "You cannot read a product label.",
        "You ask whether they sell Korean pears."
      ],
      practiceTip: "Asian market scenes are comfort scenes. Use English to rebuild home, not just buy food."
    },
    "037": {
      lines: lines([
        ["You", "Hi, sorry, is this washer available?"],
        ["Neighbor", "Yeah, that one should be free."],
        ["You", "Thanks. First time using these machines. Do they take coins or an app?"],
        ["Neighbor", "App only. The code is on the machine."],
        ["You", "Got it. And do I add detergent here or directly with the clothes?"],
        ["Neighbor", "Use that drawer on the left."],
        ["You", "Perfect. I really appreciate it."],
        ["Neighbor", "No problem. The dryers are a little weak, so use extra time for towels."],
        ["You", "Good tip. If a machine stops early, should I call the number on the wall?"],
        ["Neighbor", "Yeah, or tell the manager if it's during office hours."],
        ["You", "Okay. I'm trying not to turn laundry into a whole incident."],
        ["Neighbor", "That's the dream."]
      ]),
      usefulExpressions: [
        "Is this washer available?",
        "First time using these machines.",
        "Do they take coins or an app?",
        "The code is on the machine.",
        "detergent",
        "The dryers are a little weak.",
        "use extra time",
        "turn laundry into a whole incident"
      ],
      variations: [
        "The app payment fails.",
        "Someone moved your laundry.",
        "The dryer does not dry well.",
        "You ask if a machine is broken.",
        "You need change for coins."
      ],
      practiceTip: "Laundry English is practical and surprisingly social. Ask with humility; people usually help."
    },
    "038": {
      lines: lines([
        ["Roommate", "Hey, do you have a minute to talk house stuff?"],
        ["You", "Of course. I actually wanted to ask about the routine here."],
        ["Roommate", "Cool. We try to keep the kitchen clean and not leave dishes overnight."],
        ["You", "That makes sense. If I cook late after studio, I'll make sure to clean up before bed."],
        ["Roommate", "Appreciate it. Also, we give each other a heads-up if we have guests over."],
        ["You", "Totally fair. I probably won't have guests often, but I'll let you know."],
        ["Roommate", "Noise-wise, weeknights after ten are usually quiet."],
        ["You", "Got it. If I'm on a call with Korea late at night, I'll keep my voice down."],
        ["Roommate", "Thanks. Time difference is rough, huh?"],
        ["You", "Very. My family is basically awake when I'm supposed to be asleep."],
        ["Roommate", "You'll find a rhythm."],
        ["You", "I hope so. Thanks for talking it through."]
      ]),
      usefulExpressions: [
        "Do you have a minute to talk house stuff?",
        "I wanted to ask about the routine.",
        "not leave dishes overnight",
        "give each other a heads-up",
        "guests over",
        "weeknights after ten",
        "keep my voice down",
        "talking it through"
      ],
      variations: [
        "You discuss cleaning schedule.",
        "You ask about guests.",
        "You talk about late-night calls.",
        "A roommate complains about noise.",
        "You ask about shared supplies."
      ],
      practiceTip: "Housemate talks go better when you show you care before there is a problem."
    },
    "039": {
      lines: lines([
        ["Manager", "Maintenance office, how can I help?"],
        ["You", "Hi, I'm calling from apartment 3B. The hot water isn't working this morning."],
        ["Manager", "Is it only in the shower, or everywhere?"],
        ["You", "I checked the bathroom sink and kitchen sink too. It's cold everywhere."],
        ["Manager", "Okay, we'll send someone to take a look."],
        ["You", "Thanks. Do you have a rough time window? I need to be on campus later."],
        ["Manager", "Between noon and two, if that works."],
        ["You", "That works. Do I need to be home, or can maintenance enter with notice?"],
        ["Manager", "We can enter with your permission."],
        ["You", "That's fine. Please have them knock first, just in case I'm here."],
        ["Manager", "Will do."],
        ["You", "Thanks. I appreciate the quick response."]
      ]),
      usefulExpressions: [
        "I'm calling from apartment 3B.",
        "The hot water isn't working.",
        "Is it only in the shower, or everywhere?",
        "rough time window",
        "if that works",
        "Do I need to be home?",
        "enter with notice",
        "Please have them knock first."
      ],
      variations: [
        "The heat is not working.",
        "The window will not close.",
        "The internet is down.",
        "You need to reschedule maintenance.",
        "The technician arrives while you are in class."
      ],
      practiceTip: "Maintenance English needs exact location, problem scope, and access permission."
    },
    "040": {
      lines: lines([
        ["Agent", "Thanks for contacting support. Can I have the email on the account?"],
        ["You", "Sure. It's jongkuk dot yi at gmail dot com."],
        ["Agent", "Thank you. How can I help today?"],
        ["You", "My package says delivered, but I don't see it in the mailroom or at my door."],
        ["Agent", "I'm sorry about that. Can you confirm the delivery address?"],
        ["You", "Yes, it's 42 Beacon Street, apartment 3B, Boston."],
        ["Agent", "The tracking shows it was left with the front desk."],
        ["You", "I checked there earlier, but I'll check again. If it's not there, what are the next steps?"],
        ["Agent", "We can open an investigation and contact the carrier."],
        ["You", "That would be helpful. I just moved, so I want to make sure the address format is correct."],
        ["Agent", "The address looks correct on our end."],
        ["You", "Great. Please go ahead and open the investigation."]
      ]),
      usefulExpressions: [
        "Can I have the email on the account?",
        "My package says delivered.",
        "mailroom",
        "Can you confirm the delivery address?",
        "left with the front desk",
        "what are the next steps?",
        "open an investigation",
        "on our end"
      ],
      variations: [
        "You request a refund.",
        "You change a delivery address.",
        "You reschedule an appointment.",
        "You verify your account by phone.",
        "You ask for a confirmation email."
      ],
      practiceTip: "Customer service calls are scripts. Account, issue, confirmation, next steps."
    },
    "041": {
      lines: lines([
        ["Ticket Staff", "Hi, welcome. Are you buying tickets today?"],
        ["You", "Yes. Do you offer a student discount?"],
        ["Ticket Staff", "We do. Do you have a student ID?"],
        ["You", "Yes, here it is."],
        ["Ticket Staff", "Great. General admission is discounted with that."],
        ["You", "Perfect. I'm especially interested in architecture and spatial installations. Is there a gallery you'd recommend starting with?"],
        ["Ticket Staff", "You might like the contemporary wing, and the courtyard is worth seeing too."],
        ["You", "Great. Is there an audio guide, or is everything on the app?"],
        ["Ticket Staff", "Mostly through the app now."],
        ["You", "Got it. If I want to come back another day, is the ticket single-entry only?"],
        ["Ticket Staff", "It's valid for today only."],
        ["You", "Okay, then I'll take my time. Thanks for the guidance."]
      ]),
      usefulExpressions: [
        "Do you offer a student discount?",
        "General admission",
        "spatial installations",
        "gallery you'd recommend",
        "contemporary wing",
        "worth seeing",
        "through the app",
        "single-entry only"
      ],
      variations: [
        "You ask where a special exhibition is.",
        "You ask if photography is allowed.",
        "You ask about audio guides.",
        "You talk to another visitor about a work.",
        "You ask about museum membership."
      ],
      practiceTip: "Museum English lets you practice thoughtful curiosity without needing long speeches."
    },
    "042": {
      lines: lines([
        ["Gallerist", "Hi, let me know if you have any questions."],
        ["You", "Thanks. I was actually wondering about this piece. Is it part of a larger series?"],
        ["Gallerist", "Yes, the artist has been working with domestic objects and memory."],
        ["You", "That makes sense. It feels familiar, but slightly displaced."],
        ["Gallerist", "That's a nice way to put it."],
        ["You", "I'm studying architecture, so I'm also interested in how the work changes the room."],
        ["Gallerist", "The installation was designed specifically for this space."],
        ["You", "I noticed the sightline from the entrance. It pulls you in before you understand what you're looking at."],
        ["Gallerist", "Exactly. The artist wanted that slow reveal."],
        ["You", "It's really thoughtful. Is there an artist statement I could read?"],
        ["Gallerist", "Yes, right by the front desk."],
        ["You", "Great. Thank you. This is giving me a lot to think about."]
      ]),
      usefulExpressions: [
        "Is it part of a larger series?",
        "domestic objects and memory",
        "familiar, but slightly displaced",
        "how the work changes the room",
        "designed specifically for this space",
        "sightline",
        "slow reveal",
        "artist statement"
      ],
      variations: [
        "You meet the artist.",
        "You ask whether the work is for sale.",
        "You talk about the spatial layout.",
        "You ask if there is an opening reception.",
        "You give a brief personal reaction."
      ],
      practiceTip: "Gallery talk is not about sounding fancy. Name what you notice, then ask one informed question."
    },
    "043": {
      lines: lines([
        ["Guide", "This block shows several layers of Boston's urban history."],
        ["You", "Can I ask a quick question about the materials?"],
        ["Guide", "Of course."],
        ["You", "Was the brick chosen mainly for preservation reasons, or was it also about matching the surrounding context?"],
        ["Guide", "Both. The review board cared about continuity, but the architects also wanted a quieter street presence."],
        ["You", "That makes sense. It feels new, but it doesn't shout."],
        ["Participant", "Are you an architect?"],
        ["You", "Yes, I'm starting a PhD in architecture, so I'm trying to learn the city by walking it."],
        ["Guide", "That's the best way to learn Boston."],
        ["You", "I'm also curious how the city balances preservation with development pressure."],
        ["Guide", "That tension is everywhere here."],
        ["You", "I can already feel that. It's a very useful city to study."]
      ]),
      usefulExpressions: [
        "layers of urban history",
        "Can I ask a quick question?",
        "preservation reasons",
        "surrounding context",
        "quieter street presence",
        "It doesn't shout.",
        "learn the city by walking it",
        "development pressure"
      ],
      variations: [
        "You ask about a building's history.",
        "You ask about materials.",
        "You talk to another participant.",
        "You ask about preservation policy.",
        "You connect the tour to your research."
      ],
      practiceTip: "Tour questions are a low-pressure way to practice academic curiosity in public."
    },
    "044": {
      lines: lines([
        ["Librarian", "Hi. First time visiting?"],
        ["You", "Yes. I'm new to Boston, and I wanted to spend some time here."],
        ["Librarian", "Welcome. Are you looking for anything specific?"],
        ["You", "A quiet reading room, and maybe architecture or urban history books if they're easy to find."],
        ["Librarian", "The reading room is upstairs. Architecture is on the second floor, and local history is nearby."],
        ["You", "Great. Do I need a library card to sit and read?"],
        ["Librarian", "No, only if you want to borrow materials."],
        ["You", "Good to know. Is photography allowed in the public areas?"],
        ["Librarian", "Yes, just no flash and be respectful of other visitors."],
        ["You", "Of course. The building is beautiful, so I wanted to take a few reference photos."],
        ["Librarian", "That's fine."],
        ["You", "Thank you. This might become one of my favorite places in the city."]
      ]),
      usefulExpressions: [
        "First time visiting?",
        "spend some time here",
        "quiet reading room",
        "local history",
        "Do I need a library card?",
        "borrow materials",
        "no flash",
        "reference photos"
      ],
      variations: [
        "You register for a library card.",
        "You ask about study rooms.",
        "You ask if laptop use is allowed.",
        "You ask for architecture books.",
        "You ask about photography rules."
      ],
      practiceTip: "Public-library English is warm and civic. It is a good place to sound curious and respectful."
    },
    "045": {
      lines: lines([
        ["Bookseller", "Can I help you find anything?"],
        ["You", "Yes, I'm looking for books on housing, urban design, or architectural theory."],
        ["Bookseller", "Architecture is toward the back, near design and art."],
        ["You", "Great. I'm starting a PhD, so I'm trying to build a small working shelf without buying everything at once."],
        ["Bookseller", "Smart approach. Are you looking for classics or newer books?"],
        ["You", "A mix. Something foundational, but also something that feels current."],
        ["Bookseller", "I'd start with this one, and we can order others if we don't have them."],
        ["You", "That's helpful. Do you also have books on Boston's urban history?"],
        ["Bookseller", "Yes, local history is one aisle over."],
        ["You", "Perfect. I'll browse both sections."],
        ["Bookseller", "Let me know if you want recommendations."],
        ["You", "I will. Thanks for pointing me in the right direction."]
      ]),
      usefulExpressions: [
        "Can I help you find anything?",
        "architectural theory",
        "build a small working shelf",
        "without buying everything at once",
        "foundational",
        "feels current",
        "we can order others",
        "pointing me in the right direction"
      ],
      variations: [
        "You ask for a specific author.",
        "The book is out of stock.",
        "You ask about used copies.",
        "You ask for English learning books.",
        "You ask if they can order a book."
      ],
      practiceTip: "Bookstore English is ideal for precise taste. Practice saying what kind of book you want."
    },
    "046": {
      lines: lines([
        ["Associate", "Hi, welcome in. Let me know if you have any questions."],
        ["You", "Thanks. I'm just browsing, but this lamp caught my eye."],
        ["Associate", "It's made by a local designer."],
        ["You", "Really? The material feels warmer than it looks from a distance."],
        ["Associate", "It's a recycled composite with a matte finish."],
        ["You", "Interesting. I'm studying architecture, so I tend to get curious about materials."],
        ["Associate", "Then you'd probably like the furniture section in the back."],
        ["You", "I'll check it out. Is this piece available in other colors?"],
        ["Associate", "Yes, we can order it in black or off-white."],
        ["You", "Good to know. I'm not buying today, but I may come back once I settle into my place."],
        ["Associate", "No pressure at all."],
        ["You", "Thanks. I appreciate it."]
      ]),
      usefulExpressions: [
        "I'm just browsing.",
        "caught my eye",
        "made by a local designer",
        "warmer than it looks",
        "recycled composite",
        "matte finish",
        "available in other colors",
        "No pressure at all."
      ],
      variations: [
        "You ask about price.",
        "You ask about gift wrapping.",
        "You ask about materials.",
        "You say you are just browsing.",
        "You ask if an item can be ordered."
      ],
      practiceTip: "Shopping without buying is a real skill. 'I'm just browsing' plus curiosity keeps it natural."
    },
    "047": {
      lines: lines([
        ["You", "Excuse me, would you mind taking a quick photo for me?"],
        ["Tourist", "Sure. How do you want it framed?"],
        ["You", "If you could get the river and a little bit of the skyline, that would be great."],
        ["Tourist", "Got it. One, two, three."],
        ["You", "Thanks so much. That looks great."],
        ["Tourist", "Are you visiting?"],
        ["You", "I just moved here for school, so I'm half tourist, half overwhelmed new resident."],
        ["Tourist", "That's a good combination."],
        ["You", "I'm trying to walk around and get a feel for the city before classes get intense."],
        ["Tourist", "This is a good place for that."],
        ["You", "Definitely. Do you know if this path loops all the way around?"],
        ["Tourist", "Yeah, you can keep following it for a long walk."],
        ["You", "Perfect. Thanks again."]
      ]),
      usefulExpressions: [
        "Would you mind taking a quick photo?",
        "How do you want it framed?",
        "get the river and the skyline",
        "half tourist, half overwhelmed new resident",
        "get a feel for the city",
        "before classes get intense",
        "Does this path loop?",
        "Thanks again."
      ],
      variations: [
        "You ask about jogging routes.",
        "Someone asks where you are from.",
        "You talk about the weather.",
        "You ask for a photo.",
        "You ask how far the path goes."
      ],
      practiceTip: "Outdoor small talk is gentle. A photo request can become a tiny conversation."
    },
    "048": {
      lines: lines([
        ["Usher", "Can I see your ticket?"],
        ["You", "Sure, here it is. I think I'm in section 23, but I'm not totally sure where to go."],
        ["Usher", "You're on the right level. Go left, then up the stairs."],
        ["You", "Great, thank you. This is my first baseball game in Boston."],
        ["Fan", "First Sox game?"],
        ["You", "Yeah. I know the basic rules, but I'm still learning the flow."],
        ["Fan", "You'll pick it up. Half the fun is just being here."],
        ["You", "The atmosphere is already worth it."],
        ["Fan", "Wait until the crowd gets going."],
        ["You", "Who should I keep an eye on today?"],
        ["Fan", "Watch the starting pitcher and the guy batting third."],
        ["You", "Got it. I appreciate the crash course."]
      ]),
      usefulExpressions: [
        "Can I see your ticket?",
        "I'm not totally sure where to go.",
        "first baseball game",
        "I'm still learning the flow.",
        "You'll pick it up.",
        "The atmosphere is already worth it.",
        "keep an eye on",
        "crash course"
      ],
      variations: [
        "You ask where your seat is.",
        "You ask about baseball rules.",
        "You ask which team someone supports.",
        "You buy food at the stadium.",
        "You talk about the crowd."
      ],
      practiceTip: "Sports English is a door into culture. Admit you are learning and fans will often explain."
    },
    "049": {
      lines: lines([
        ["Security", "Please have your ticket ready and unzip your bag."],
        ["You", "Sure. I have the ticket on my phone."],
        ["Security", "Any outside food or drinks?"],
        ["You", "No, just a water bottle. Should I throw it away?"],
        ["Security", "Empty bottles are fine."],
        ["You", "Great. I'm in section 310. Which gate should I use?"],
        ["Usher", "You're already through the right gate. Take the escalator up two levels."],
        ["You", "Thanks. Is it easy to get a ride after the game, or does it get crazy?"],
        ["Usher", "It gets pretty crowded. If you can walk a few blocks first, that's usually better."],
        ["You", "Good to know. I'm still learning event-night logistics here."],
        ["Usher", "You'll figure it out."],
        ["You", "Thanks. Appreciate the heads-up."]
      ]),
      usefulExpressions: [
        "Have your ticket ready.",
        "unzip your bag",
        "outside food or drinks",
        "Empty bottles are fine.",
        "Which gate should I use?",
        "Take the escalator up two levels.",
        "It gets pretty crowded.",
        "Appreciate the heads-up."
      ],
      variations: [
        "You attend a Celtics game.",
        "You attend a Bruins game.",
        "You ask about bag policy.",
        "You ask how to get home after the event.",
        "You cannot find your section."
      ],
      practiceTip: "Event English is about security, gates, seats, and exit strategy."
    },
    "050": {
      lines: lines([
        ["Bartender", "What can I get you?"],
        ["You", "Could I get a ginger ale for now?"],
        ["Bartender", "Sure thing. Starting a tab?"],
        ["You", "No, I'll pay as I go, thanks."],
        ["Fan", "You watching the game?"],
        ["You", "Yeah, but I should be honest - I'm still learning the rules."],
        ["Fan", "Which sport? Basketball?"],
        ["You", "Basketball I can follow a bit. Hockey still feels like organized lightning."],
        ["Fan", "That's a pretty accurate description."],
        ["You", "I'm new to Boston, so I'm trying to understand the sports culture without pretending I know everything."],
        ["Fan", "Good strategy. Just cheer when everyone else cheers."],
        ["You", "That I can do."]
      ]),
      usefulExpressions: [
        "What can I get you?",
        "Starting a tab?",
        "I'll pay as I go.",
        "I'm still learning the rules.",
        "I can follow a bit.",
        "organized lightning",
        "sports culture",
        "without pretending I know everything"
      ],
      variations: [
        "You ask what game is on.",
        "You split a bill.",
        "You ask about a local team.",
        "You order food.",
        "Someone explains a rule to you."
      ],
      practiceTip: "Sports bar talk rewards honesty. 'I'm still learning' is a strong opener."
    },
    "051": {
      lines: lines([
        ["Staff", "Hi, what movie are you seeing?"],
        ["You", "The 7:30 showing of the new drama, please."],
        ["Staff", "Any seat preference?"],
        ["You", "Somewhere in the middle, not too close to the screen."],
        ["Staff", "How about row F, seat 8?"],
        ["You", "That sounds good. Does this showing have captions by any chance?"],
        ["Staff", "Open captions, no. Closed caption devices are available at guest services."],
        ["You", "Good to know. I'll try without one today."],
        ["Staff", "Anything from concessions?"],
        ["You", "Small popcorn and water, please."],
        ["Staff", "You can tap here."],
        ["You", "Thanks. Which theater is it in?"],
        ["Staff", "Theater four, down the hall on the right."]
      ]),
      usefulExpressions: [
        "the 7:30 showing",
        "Any seat preference?",
        "not too close to the screen",
        "Does this showing have captions?",
        "Closed caption devices",
        "guest services",
        "concessions",
        "down the hall on the right"
      ],
      variations: [
        "You ask about subtitles.",
        "You change seats.",
        "You ask where the theater is.",
        "You order popcorn.",
        "You ask about sold-out showings."
      ],
      practiceTip: "Movie theater English is simple, but caption questions are worth practicing."
    },
    "052": {
      lines: lines([
        ["Usher", "Good evening. Can I see your ticket?"],
        ["You", "Of course. I'm in balcony row C."],
        ["Usher", "Balcony is up the stairs and to the left."],
        ["You", "Thank you. Is there a program available?"],
        ["Usher", "Yes, right on that table."],
        ["You", "Great. Do people usually come back to the same seat after intermission, or is it open seating?"],
        ["Usher", "Same seat."],
        ["You", "Got it. First time in this venue, so I'm learning the routine."],
        ["Audience Member", "It's a beautiful hall."],
        ["You", "It really is. The proportions feel very intimate."],
        ["Audience Member", "The sound is great too."],
        ["You", "I'm looking forward to hearing it in action."]
      ]),
      usefulExpressions: [
        "Can I see your ticket?",
        "balcony row C",
        "program available",
        "intermission",
        "open seating",
        "learning the routine",
        "beautiful hall",
        "The proportions feel intimate."
      ],
      variations: [
        "You ask about intermission length.",
        "You ask if photos are allowed.",
        "You cannot find your seat.",
        "You talk about the performance afterward.",
        "You ask where the restroom is."
      ],
      practiceTip: "Performance venues are polite spaces. Slower, softer English fits the setting."
    },
    "053": {
      lines: lines([
        ["Classmate", "Hey, glad you could make it."],
        ["You", "Thanks for inviting me. I brought some snacks - nothing fancy, but I didn't want to show up empty-handed."],
        ["Classmate", "That's perfect. Come on in."],
        ["Friend", "I don't think we've met. I'm Daniel."],
        ["You", "Nice to meet you. I'm Jongkuk. I just started the architecture PhD program."],
        ["Friend", "Oh nice. How's Boston treating you so far?"],
        ["You", "It's been a lot, but in a good way. I'm still learning basic survival things like groceries and laundry."],
        ["Classmate", "That's real."],
        ["You", "I also brought a Korean snack. It's a little spicy, but not dangerous."],
        ["Friend", "Now I'm curious."],
        ["You", "Try it and tell me the honest truth."],
        ["Classmate", "Careful, that's how friendships become real."]
      ]),
      usefulExpressions: [
        "Thanks for inviting me.",
        "I didn't want to show up empty-handed.",
        "Come on in.",
        "How's Boston treating you?",
        "It's been a lot, but in a good way.",
        "basic survival things",
        "a little spicy, but not dangerous",
        "tell me the honest truth"
      ],
      variations: [
        "You ask what to bring.",
        "You introduce Korean food.",
        "You talk about your research briefly.",
        "You meet several new people.",
        "You suggest hanging out again."
      ],
      practiceTip: "Friend-apartment English is warm and casual. Bring one personal detail and one easy joke."
    }
  };

  Object.assign(scripts, moreScripts);

  Object.assign(scripts, {
    "054": {
      lines: lines([
        ["Volunteer", "Good morning. Welcome."],
        ["You", "Good morning. This is my first time here."],
        ["Volunteer", "We're glad you're here. Are you looking for the service?"],
        ["You", "Yes. I just moved to Boston, and I wanted to visit a church nearby."],
        ["Volunteer", "Of course. The service starts in about ten minutes."],
        ["You", "Great. Is there a place visitors usually sit, or can I sit anywhere?"],
        ["Volunteer", "You can sit anywhere. If you'd like, I can introduce you to our newcomer team afterward."],
        ["You", "That would be nice. I'm still getting settled, so it would be good to meet people slowly."],
        ["Volunteer", "Absolutely. Do you prefer to sit near the back today?"],
        ["You", "Yes, that would help me follow along without feeling too visible."],
        ["Volunteer", "No problem. Right this way."],
        ["You", "Thank you. I appreciate the warm welcome."]
      ]),
      usefulExpressions: [
        "This is my first time here.",
        "I wanted to visit a church nearby.",
        "Can I sit anywhere?",
        "newcomer team",
        "I'm still getting settled.",
        "meet people slowly",
        "near the back",
        "warm welcome"
      ],
      variations: [
        "You ask about service time.",
        "You ask where to sit.",
        "You meet a newcomer volunteer.",
        "You ask about Korean or English service.",
        "You ask about small groups."
      ],
      practiceTip: "Church entrance English should feel honest and unforced. 'This is my first time here' opens the door."
    },
    "055": {
      lines: lines([
        ["Member", "Hi, is this seat open?"],
        ["You", "Yes, please. I'm new here, so I'm not sure what the usual flow is."],
        ["Member", "No worries. The service will start with a couple of songs, then announcements and the message."],
        ["You", "Thanks. That helps. I'm Jongkuk, by the way."],
        ["Member", "I'm Grace. Nice to meet you."],
        ["You", "Nice to meet you too. I just moved to Boston for school."],
        ["Member", "Oh, where are you studying?"],
        ["You", "I'm starting a PhD program in architecture."],
        ["Member", "That's exciting. Big transition, though."],
        ["You", "Very big. I'm trying to find a healthy rhythm early."],
        ["Member", "That's wise."],
        ["You", "Thanks. If I seem a little lost, I'm still learning both Boston and the service order."]
      ]),
      usefulExpressions: [
        "I'm not sure what the usual flow is.",
        "The service will start with...",
        "the message",
        "by the way",
        "Big transition",
        "healthy rhythm",
        "If I seem a little lost...",
        "service order"
      ],
      variations: [
        "You ask about the bulletin.",
        "You ask whether communion is today.",
        "Someone asks where you are studying.",
        "You explain you are new to Boston.",
        "You ask if there is coffee after service."
      ],
      practiceTip: "Before-service talk is brief. One introduction, one context line, one small question."
    },
    "056": {
      lines: lines([
        ["Member", "Hi, I don't think we've met. I'm Michael."],
        ["You", "Nice to meet you. I'm Jongkuk. Today's my first Sunday here."],
        ["Member", "Welcome. Are you new to Boston?"],
        ["You", "Yes, I arrived recently to start a PhD program in architecture."],
        ["Member", "Wow. How's the adjustment going?"],
        ["You", "Slowly, but I'm grateful. I'm figuring out housing, campus, food, all the basics."],
        ["Member", "That's a lot to carry at once."],
        ["You", "It is. I'm trying to build community before I get buried in schoolwork."],
        ["Member", "Good instinct. We have small groups during the week if you're interested."],
        ["You", "I am, but I may need something low-pressure at first."],
        ["Member", "Totally. I can introduce you to the group coordinator."],
        ["You", "That would be great. Thank you."]
      ]),
      usefulExpressions: [
        "I don't think we've met.",
        "Today's my first Sunday here.",
        "How's the adjustment going?",
        "all the basics",
        "That's a lot to carry at once.",
        "build community",
        "buried in schoolwork",
        "low-pressure at first"
      ],
      variations: [
        "You talk with a pastor.",
        "You ask about small groups.",
        "You explain your school schedule.",
        "You ask about volunteering later.",
        "You meet another newcomer."
      ],
      practiceTip: "Coffee-time English is connection English. Share enough to be known, not so much that you feel exposed."
    },
    "057": {
      lines: lines([
        ["Leader", "Before we start, let's do quick introductions."],
        ["You", "Sure. I'm Jongkuk. I just moved to Boston from Korea."],
        ["Leader", "Welcome. What brought you here?"],
        ["You", "I'm starting a PhD program in architecture, so I'm in a big season of transition."],
        ["Member", "How has the first week been?"],
        ["You", "Honestly, a mix of excitement and mental overload."],
        ["Leader", "That's a very real answer."],
        ["You", "I'm grateful to be here, but I'm also trying to rebuild basic routines - sleep, food, church, community."],
        ["Member", "That makes sense."],
        ["Leader", "Any prayer request you'd like to share?"],
        ["You", "Yes, for patience and a steady heart while I adjust."],
        ["Leader", "Absolutely. We're glad you're here."],
        ["You", "Thank you. I'm glad to be here too."]
      ]),
      usefulExpressions: [
        "quick introductions",
        "a big season of transition",
        "mental overload",
        "That's a very real answer.",
        "rebuild basic routines",
        "prayer request",
        "a steady heart",
        "while I adjust"
      ],
      variations: [
        "You share a shorter introduction.",
        "You mention your faith background briefly.",
        "You ask about the next meeting.",
        "You share a prayer request.",
        "You ask for help finding rides."
      ],
      practiceTip: "Small-group English can be simple and sincere. You do not need a polished testimony every time."
    },
    "058": {
      lines: lines([
        ["Member", "Have you tried the food yet?"],
        ["You", "Not yet, but it smells really good."],
        ["Member", "Grab a plate. There's plenty."],
        ["You", "Thanks. Is this homemade?"],
        ["Member", "Some of it, yes. We rotate who brings what."],
        ["You", "That's wonderful. Food makes a new place feel less intimidating."],
        ["Member", "Absolutely. Do you cook much?"],
        ["You", "I do, but I'm still figuring out where to buy Korean ingredients here."],
        ["Member", "There's a good Asian market not too far away."],
        ["You", "I'd love the name if you remember it."],
        ["Member", "I'll text it to you."],
        ["You", "Thank you. That might improve my week immediately."]
      ]),
      usefulExpressions: [
        "Grab a plate.",
        "There's plenty.",
        "We rotate who brings what.",
        "less intimidating",
        "Do you cook much?",
        "Korean ingredients",
        "not too far away",
        "That might improve my week immediately."
      ],
      variations: [
        "You ask what a dish is.",
        "Someone asks about Korean food.",
        "You talk about family.",
        "You ask for neighborhood recommendations.",
        "You exchange phone numbers."
      ],
      practiceTip: "Lunch conversation is where practical help appears. Ask for one recommendation."
    },
    "059": {
      lines: lines([
        ["Pharmacist", "Hi, what symptoms are you having?"],
        ["You", "I have a sore throat, a runny nose, and a little bit of a cough."],
        ["Pharmacist", "Any fever?"],
        ["You", "Not that I can tell. I mostly feel congested and tired."],
        ["Pharmacist", "Do you need something non-drowsy?"],
        ["You", "Yes, if possible. I need to be functional during the day."],
        ["Pharmacist", "This one is non-drowsy. Take it every twelve hours."],
        ["You", "Thanks. Can I take it with ibuprofen if I have a headache?"],
        ["Pharmacist", "Yes, but follow the dosage on both labels."],
        ["You", "Got it. Is this over the counter, or do I need a prescription?"],
        ["Pharmacist", "Over the counter."],
        ["You", "Perfect. Thanks for helping me choose the right thing."]
      ]),
      usefulExpressions: [
        "What symptoms are you having?",
        "sore throat",
        "runny nose",
        "congested",
        "non-drowsy",
        "functional during the day",
        "every twelve hours",
        "over the counter"
      ],
      variations: [
        "You need allergy medicine.",
        "You ask if medicine causes drowsiness.",
        "You ask about dosage.",
        "You ask about insurance.",
        "You need medicine without a prescription."
      ],
      practiceTip: "Pharmacy English is symptom plus constraint: what hurts, how long, sleepy or non-sleepy."
    },
    "060": {
      lines: lines([
        ["Receptionist", "Clinic front desk. How can I help you?"],
        ["You", "Hi, I'd like to make an appointment. I'm not feeling well."],
        ["Receptionist", "What symptoms are you having?"],
        ["You", "I've had a fever and a sore throat since yesterday, and it's getting worse."],
        ["Receptionist", "Do you have insurance?"],
        ["You", "Yes, through my university. I can bring the card or upload it if needed."],
        ["Receptionist", "We have an opening tomorrow at 10:30."],
        ["You", "That works. Is there anything I should bring besides my insurance card and ID?"],
        ["Receptionist", "Bring a list of medications you're taking."],
        ["You", "Okay. If my symptoms get worse tonight, should I go to urgent care?"],
        ["Receptionist", "Yes, especially if you have trouble breathing or a high fever."],
        ["You", "Understood. Thank you for your help."]
      ]),
      usefulExpressions: [
        "I'd like to make an appointment.",
        "I'm not feeling well.",
        "since yesterday",
        "getting worse",
        "through my university",
        "opening tomorrow at 10:30",
        "besides my insurance card and ID",
        "urgent care"
      ],
      variations: [
        "You describe stomach pain.",
        "You ask about insurance coverage.",
        "You need same-day care.",
        "You explain pain location.",
        "You ask about prescriptions."
      ],
      practiceTip: "Medical English should be plain. Symptom, start time, severity, insurance, next step."
    },
    "061": {
      lines: lines([
        ["Banker", "Hi, what brings you in today?"],
        ["You", "I'd like to open a checking account. I just moved here for graduate school."],
        ["Banker", "Sure. Do you have a passport and proof of address?"],
        ["You", "I have my passport. For address, I only have temporary housing right now."],
        ["Banker", "A lease or official school document may work, depending on the account."],
        ["You", "I have my admission letter and a housing confirmation email. Would either of those help?"],
        ["Banker", "Let's take a look."],
        ["You", "Thanks. I also wanted to ask about debit cards and international transfers."],
        ["Banker", "We can issue a debit card, and we can explain wire transfer fees."],
        ["You", "Great. I'm trying to understand the fees before I commit to anything."],
        ["Banker", "Absolutely. We'll go through them line by line."],
        ["You", "I appreciate that. Banking terms are still new to me in English."]
      ]),
      usefulExpressions: [
        "What brings you in today?",
        "open a checking account",
        "proof of address",
        "temporary housing",
        "housing confirmation email",
        "debit card",
        "international transfers",
        "before I commit to anything"
      ],
      variations: [
        "You do not have proof of address.",
        "You ask about wire transfer fees.",
        "You ask about minimum balance.",
        "You ask when the debit card arrives.",
        "You ask whether there is a monthly fee."
      ],
      practiceTip: "Bank English needs slow confirmation. Never pretend you understand a fee."
    },
    "062": {
      lines: lines([
        ["Staff", "Hi, looking for a new phone plan?"],
        ["You", "Yes. I just moved to the U.S., and I need a local number."],
        ["Staff", "Do you want prepaid or a monthly plan?"],
        ["You", "I'm not sure yet. I want something simple with enough data for maps, email, and video calls."],
        ["Staff", "Prepaid might be easiest to start."],
        ["You", "That sounds good. Can I use eSIM, or do I need a physical SIM card?"],
        ["Staff", "If your phone is unlocked, eSIM should work."],
        ["You", "How can I check if it's unlocked?"],
        ["Staff", "We can check the device here."],
        ["You", "Great. Also, are there activation fees I should know about?"],
        ["Staff", "There's a small activation fee on the first bill."],
        ["You", "Thanks for telling me. I'm trying to avoid surprises."]
      ]),
      usefulExpressions: [
        "I need a local number.",
        "prepaid or monthly plan",
        "something simple",
        "enough data for maps",
        "eSIM",
        "physical SIM card",
        "If your phone is unlocked...",
        "activation fee"
      ],
      variations: [
        "Your phone is locked.",
        "You ask about eSIM.",
        "You compare prepaid and monthly plans.",
        "You ask about international calls.",
        "Your payment does not go through."
      ],
      practiceTip: "Phone-plan English is full of hidden costs. Ask about fees, data, contract, and cancellation."
    },
    "063": {
      lines: lines([
        ["Postal Worker", "Next in line."],
        ["You", "Hi, I'd like to send this package to Korea."],
        ["Postal Worker", "International shipping. What's inside?"],
        ["You", "Just documents and a small gift. Nothing fragile or electronic."],
        ["Postal Worker", "You'll need to fill out a customs form."],
        ["You", "Okay. Is there a cheaper option, or is this the standard rate?"],
        ["Postal Worker", "There are a few options depending on speed and tracking."],
        ["You", "I'd like tracking, but it doesn't have to be the fastest."],
        ["Postal Worker", "Then this option is probably best."],
        ["You", "Great. Could you show me where to write the recipient's phone number?"],
        ["Postal Worker", "Right here under the address."],
        ["You", "Perfect. Thanks for walking me through it."]
      ]),
      usefulExpressions: [
        "I'd like to send this package to Korea.",
        "What's inside?",
        "Nothing fragile or electronic.",
        "customs form",
        "depending on speed and tracking",
        "it doesn't have to be the fastest",
        "recipient's phone number",
        "walk me through it"
      ],
      variations: [
        "You pick up a package.",
        "You ask about tracking.",
        "You fill out an international form.",
        "A package is missing.",
        "You ask about shipping cost."
      ],
      practiceTip: "Post office English is form-heavy. Ask them to point to the exact field."
    },
    "064": {
      lines: lines([
        ["Officer", "What seems to be the problem?"],
        ["You", "I think I lost my wallet. I last had it near South Station."],
        ["Officer", "What was inside?"],
        ["You", "My Korean ID, one debit card, some cash, and my student ID."],
        ["Officer", "Do you know the approximate time you lost it?"],
        ["You", "Probably between 6 and 7 p.m. I noticed it was missing when I got home."],
        ["Officer", "We can file a lost property report."],
        ["You", "Thank you. I also want to know what to do if someone uses my card."],
        ["Officer", "Call your bank immediately and freeze the card."],
        ["You", "I already locked it through the app, but I'll call them too."],
        ["Officer", "Good. Leave your contact information here."],
        ["You", "Of course. If it turns up, could someone contact me by email?"]
      ]),
      usefulExpressions: [
        "I think I lost my wallet.",
        "I last had it near...",
        "approximate time",
        "I noticed it was missing.",
        "lost property report",
        "freeze the card",
        "locked it through the app",
        "If it turns up..."
      ],
      variations: [
        "You lose your passport.",
        "You lose your phone.",
        "You file a report.",
        "You describe the item.",
        "You leave contact information."
      ],
      practiceTip: "Lost-item English needs sequence: last seen, contents, time, contact, next step."
    },
    "065": {
      lines: lines([
        ["Stylist", "Hi, what are we doing today?"],
        ["You", "I'd like a trim, but not too short."],
        ["Stylist", "How much do you want to take off?"],
        ["You", "Maybe about half an inch on top, and clean up the sides and back."],
        ["Stylist", "Do you want clippers on the sides?"],
        ["You", "Yes, but not too tight. I still want it to look natural."],
        ["Stylist", "Got it. Do you have a photo?"],
        ["You", "Yes, this is close to what I mean. It doesn't have to be exactly the same."],
        ["Stylist", "No problem. Do you usually style it with product?"],
        ["You", "A little, but I prefer something easy to manage."],
        ["Stylist", "Okay, I'll keep the shape and just clean it up."],
        ["You", "Perfect. That's exactly what I'm hoping for."]
      ]),
      usefulExpressions: [
        "I'd like a trim.",
        "not too short",
        "half an inch on top",
        "clean up the sides and back",
        "not too tight",
        "look natural",
        "Do you have a photo?",
        "easy to manage"
      ],
      variations: [
        "You ask for a fade.",
        "You say the haircut is too short.",
        "You show a photo.",
        "You ask about price and tip.",
        "You ask for simple styling advice."
      ],
      practiceTip: "Haircut English is dangerous if vague. Use length, sides, back, photo, and 'not too short.'"
    }
  });

  const cards = window.ROLEPLAY_CARDS || [];

  cards.forEach(function (card) {
    const script = scripts[card.id];
    if (!script) return;

    card.status = "scripted";
    card.level = card.level === "Draft" ? `${card.dayType || "Daily"} / Natural` : card.level;
    card.length = "About 1 minute";
    card.versions = [
      {
        title: "Complete Natural Dialogue",
        lines: script.lines
      }
    ];
    card.usefulExpressions = script.usefulExpressions;
    card.variations = script.variations;
    card.practiceTip = script.practiceTip;
  });
})();
