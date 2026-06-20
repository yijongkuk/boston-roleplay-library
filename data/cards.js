(function () {
  function lines(items) {
    return items.map(function (item) {
      return { speaker: item[0], text: item[1] };
    });
  }

  function fullCard(card) {
    return Object.assign(
      {
        status: "scripted",
        length: "About 1 minute",
        dayType: "Arrival",
        topics: [],
        versions: [],
        usefulExpressions: [],
        variations: [],
        practiceTip: ""
      },
      card
    );
  }

  function outlineCard(card) {
    return Object.assign(
      {
        status: "outline",
        length: "About 1 minute",
        mood: "Natural",
        level: "Draft",
        versions: [],
        usefulExpressions: [],
        variations: [],
        practiceTip: "Build this card as one complete natural dialogue: short, local, and expression-rich."
      },
      card
    );
  }

  window.ROLEPLAY_CARDS = [
    fullCard({
      id: "001",
      pack: "Arrival Pack",
      place: "Boston Logan Airport / Immigration",
      situation: "You have just landed in Boston to start your PhD program.",
      person: "Immigration Officer",
      goal: "Explain your purpose, school, length of stay, housing, and basic funding.",
      mood: "Tired but focused",
      level: "Arrival / Natural",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Officer", "Evening. What brings you to the United States?"],
            ["You", "I just got in from Seoul. I'm starting a PhD program in architecture here in Boston."],
            ["Officer", "Which school will you be attending?"],
            ["You", "I'll be studying at my university in Boston. I have my admission documents here if you need them."],
            ["Officer", "How long do you expect to stay?"],
            ["You", "The program should take about four to five years."],
            ["Officer", "Where are you staying tonight?"],
            ["You", "I booked a temporary place for the first couple of weeks while I get settled. After that, I'll move into long-term housing."],
            ["Officer", "And how will you support yourself?"],
            ["You", "Through school funding and personal savings. I can show the paperwork if you'd like."],
            ["Officer", "That's fine. Welcome to Boston."],
            ["You", "Thank you. Have a good night."]
          ])
        }
      ],
      usefulExpressions: [
        "I just got in from Seoul.",
        "I'm starting a PhD program in architecture.",
        "I have my admission documents here if you need them.",
        "I booked a temporary place for the first couple of weeks.",
        "I'm still getting settled.",
        "I'll move into long-term housing.",
        "I can show the paperwork if you'd like."
      ],
      variations: [
        "The officer asks you to explain your research in simpler words.",
        "You do not understand the question and need to ask them to repeat it.",
        "You cannot find your admission letter right away.",
        "The officer asks why you chose Boston.",
        "The officer asks for the exact address."
      ],
      practiceTip:
        "Practice this as one polished immigration answer. Keep the rhythm calm: purpose, school, length, housing, funding."
    }),

    fullCard({
      id: "002",
      pack: "Arrival Pack",
      place: "Baggage Claim",
      situation: "Your suitcase is late, and you need to ask an airport staff member what to do.",
      person: "Airport Staff",
      goal: "Confirm the carousel, describe your bag, and ask about a delayed baggage report.",
      mood: "Jet-lagged but polite",
      level: "Arrival / Practical",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["You", "Excuse me, my suitcase still hasn't come out. Is this the right carousel for the Seoul flight?"],
            ["Staff", "It should be. What was your final destination?"],
            ["You", "Boston. I had a connection before this, but the bag was checked through to Boston."],
            ["Staff", "What does it look like?"],
            ["You", "It's a black hard-shell suitcase with a blue tag on the handle."],
            ["Staff", "Give it a few more minutes. If it doesn't show up, head to baggage service."],
            ["You", "Got it. If I need to file a delayed baggage report, is that counter right over there?"],
            ["Staff", "Yes, by the exit doors."],
            ["You", "Can they deliver it to my temporary address if it comes in later?"],
            ["Staff", "Yes. Just put that address and your phone number on the form."],
            ["You", "Perfect. Thanks for your help."]
          ])
        }
      ],
      usefulExpressions: [
        "My suitcase still hasn't come out.",
        "Is this the right carousel?",
        "The bag was checked through to Boston.",
        "It is a black hard-shell suitcase.",
        "If it doesn't show up...",
        "I need to file a delayed baggage report.",
        "Can they deliver it to my temporary address?"
      ],
      variations: [
        "Your suitcase is damaged.",
        "Your baggage tag is in your backpack and you cannot find it right away.",
        "The staff asks for a U.S. phone number, but you do not have one yet.",
        "The staff tells you to check another carousel.",
        "You need to describe the suitcase more clearly."
      ],
      practiceTip:
        "This is airport problem-solving English. Say the problem, give the flight context, describe the bag, then ask what happens next."
    }),

    fullCard({
      id: "003",
      pack: "Arrival Pack",
      place: "Customs",
      situation: "A customs officer asks what you are bringing into the country.",
      person: "Customs Officer",
      goal: "Answer questions about food, medicine, and personal items without over-explaining.",
      mood: "Careful and calm",
      level: "Arrival / Official",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Officer", "Do you have anything to declare?"],
            ["You", "No, nothing to declare."],
            ["Officer", "Any food, alcohol, tobacco, or medication?"],
            ["You", "No alcohol or tobacco. I have a few sealed snacks and some personal medication."],
            ["Officer", "Any fresh food, meat, or fruit?"],
            ["You", "No fresh food, no meat, and no fruit. Just packaged snacks."],
            ["Officer", "Is the medication prescribed?"],
            ["You", "Yes, it's for personal use, and it's still in the original packaging."],
            ["Officer", "How long are you staying?"],
            ["You", "I'll be here for my PhD program, about four to five years."],
            ["Officer", "All right. You can go ahead."],
            ["You", "Thank you. Have a good night."]
          ])
        }
      ],
      usefulExpressions: [
        "Nothing to declare.",
        "No alcohol or tobacco.",
        "A few sealed snacks.",
        "No fresh food, no meat, and no fruit.",
        "It's for personal use.",
        "It's still in the original packaging.",
        "You can go ahead."
      ],
      variations: [
        "The officer asks what kind of snacks you brought.",
        "The officer asks what the medicine is for.",
        "You are not sure how to describe one item.",
        "The officer speaks quickly and you need them to repeat it.",
        "You need to say that everything is for personal use."
      ],
      practiceTip:
        "Use clean categories. Customs English should be short, factual, and boring in the best possible way."
    }),

    fullCard({
      id: "004",
      pack: "Arrival Pack",
      place: "Airport Information Desk",
      situation: "You need the easiest way to get from Logan Airport into Boston.",
      person: "Information Desk Staff",
      goal: "Ask about South Station, the Silver Line, tickets, and directions with luggage.",
      mood: "Tired and practical",
      level: "Arrival / Navigation",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["You", "Hi, I just landed, and I'm trying to get to South Station with luggage. What's the easiest way?"],
            ["Staff", "Take the Silver Line bus from outside the terminal. It goes straight to South Station."],
            ["You", "Great. Is it okay with two suitcases, or would an Uber be easier?"],
            ["Staff", "The bus is fine with luggage. Just keep your bags close and out of the aisle."],
            ["You", "Do I need to buy a ticket before I get on?"],
            ["Staff", "No, just follow the signs for buses and ground transportation."],
            ["You", "So I go downstairs, follow ground transportation, and look for the Silver Line?"],
            ["Staff", "Exactly."],
            ["You", "Perfect. I just wanted to make sure before dragging my bags around."],
            ["Staff", "No problem. Safe trip."],
            ["You", "Thanks. I appreciate it."]
          ])
        }
      ],
      usefulExpressions: [
        "I just landed.",
        "What's the easiest way?",
        "Is it okay with two suitcases?",
        "Would an Uber be easier?",
        "Keep your bags close and out of the aisle.",
        "Follow the signs for ground transportation.",
        "I just wanted to make sure."
      ],
      variations: [
        "You decide to take Uber instead of transit.",
        "You ask where to buy a transit card.",
        "You ask where the restroom is before leaving.",
        "You repeat the directions to confirm.",
        "The staff gives you a route with a transfer."
      ],
      practiceTip:
        "Repeat directions back in your own words. It sounds natural and saves you from wandering while exhausted."
    }),

    fullCard({
      id: "005",
      pack: "Arrival Pack",
      place: "Airport Cafe / Convenience Store",
      situation: "You need water and something small to eat after the flight.",
      person: "Cashier",
      goal: "Buy a drink and snack, handle the tip screen, ask for a bag, and get a receipt.",
      mood: "Low energy but friendly",
      level: "Arrival / Everyday",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Cashier", "Hey, you all set?"],
            ["You", "Yeah, just this water and sandwich, please."],
            ["Cashier", "Long flight?"],
            ["You", "Very long. I just got in, so I'm trying to wake up a little."],
            ["Cashier", "I hear you. That'll be $12.40. You can tap whenever you're ready."],
            ["You", "Thanks. The screen is asking about a tip, right?"],
            ["Cashier", "Yep, just make a selection and it'll go through."],
            ["You", "Got it. Could I get a bag too? I have too much luggage."],
            ["Cashier", "Sure. Do you need the receipt?"],
            ["You", "Yes, please. Thanks. Have a good one."],
            ["Cashier", "You too. Welcome to Boston."]
          ])
        }
      ],
      usefulExpressions: [
        "You all set?",
        "Just this water and sandwich, please.",
        "I just got in.",
        "You can tap whenever you're ready.",
        "The screen is asking about a tip, right?",
        "Could I get a bag too?",
        "Have a good one."
      ],
      variations: [
        "The card reader asks about a tip.",
        "The cashier asks if you want a bag.",
        "You cannot hear the total clearly.",
        "Your card does not work the first time.",
        "You ask where the napkins are."
      ],
      practiceTip:
        "This is checkout rhythm. Keep it quick, friendly, and light."
    }),

    fullCard({
      id: "006",
      pack: "Arrival Pack",
      place: "SL1 Bus Stop",
      situation: "You are about to take the Silver Line and want to make sure it goes to South Station.",
      person: "Bus Driver / Passenger",
      goal: "Confirm the route, place your luggage safely, and know when to get off.",
      mood: "Alert but unsure",
      level: "Arrival / Transit",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["You", "Hi, South Station?"],
            ["Driver", "Yep, hop on."],
            ["You", "Thanks. Is it okay if I keep these suitcases here?"],
            ["Driver", "That's fine. Just don't block the aisle."],
            ["You", "Got it. How will I know when we get there?"],
            ["Driver", "There'll be an announcement, and a lot of people will get off there."],
            ["Passenger", "First time in Boston?"],
            ["You", "Yeah, I just landed. I'm starting school here, so I'm still getting my bearings."],
            ["Passenger", "Nice. South Station is pretty obvious."],
            ["You", "Good to know. Thanks. I was trying not to overthink it."],
            ["Passenger", "We've all been there."]
          ])
        }
      ],
      usefulExpressions: [
        "South Station?",
        "Hop on.",
        "Is it okay if I keep these suitcases here?",
        "Don't block the aisle.",
        "I'm still getting my bearings.",
        "I was trying not to overthink it.",
        "We've all been there."
      ],
      variations: [
        "The bus is crowded and you need to move your bags.",
        "You ask a passenger if this is the right stop.",
        "You miss an announcement and ask if South Station is next.",
        "The driver speaks very fast.",
        "You need to apologize for blocking the aisle."
      ],
      practiceTip:
        "Transit English is full of fragments. Short, confident checks sound more natural than full textbook questions."
    }),

    fullCard({
      id: "007",
      pack: "Arrival Pack",
      place: "South Station",
      situation: "You arrive at South Station and need to choose your next move.",
      person: "Station Staff / Passenger",
      goal: "Ask about the Red Line, elevator, restroom, and rideshare pickup.",
      mood: "A little overwhelmed",
      level: "Arrival / Navigation",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["You", "Hi, quick question. I'm trying to figure out my next move with all this luggage."],
            ["Staff", "Where are you headed?"],
            ["You", "Cambridge. I might take the Red Line, but I may call an Uber if that's easier."],
            ["Staff", "The Red Line is straight ahead. If you need rideshare, go outside and follow ground transportation."],
            ["You", "Is there an elevator to the Red Line? I really don't want to carry this down the stairs."],
            ["Staff", "Yes, the elevator is on your right before the stairs."],
            ["You", "Great. And is there a restroom nearby before I decide?"],
            ["Staff", "Past the ticket machines, on the left."],
            ["You", "Red Line straight ahead, elevator on the right, restroom past the machines?"],
            ["Staff", "That's right."],
            ["You", "Perfect. Thank you. This station is bigger than I expected."]
          ])
        }
      ],
      usefulExpressions: [
        "Quick question.",
        "I'm trying to figure out my next move.",
        "I may call an Uber if that's easier.",
        "I don't want to carry this down the stairs.",
        "Past the ticket machines, on the left.",
        "That's right.",
        "This station is bigger than I expected."
      ],
      variations: [
        "You need to find the restroom quickly.",
        "You ask where to call Uber from.",
        "You decide whether to take the Red Line or a car.",
        "You ask if the elevator is working.",
        "You ask someone to repeat the directions."
      ],
      practiceTip:
        "Use quick question before asking a stranger. It makes the interruption feel normal and friendly."
    }),

    fullCard({
      id: "008",
      pack: "Arrival Pack",
      place: "Uber / Lyft Pickup Zone",
      situation: "Your driver arrives, and you need to confirm the ride and load your luggage.",
      person: "Driver",
      goal: "Confirm name, destination, luggage, pickup zone, and drop-off point.",
      mood: "Relieved but still tired",
      level: "Arrival / Service",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Driver", "Jongkuk?"],
            ["You", "Yep, that's me. Are you David?"],
            ["Driver", "That's right. Heading to Cambridge?"],
            ["You", "Yes, that's the address. Thanks for waiting. I have two suitcases, so I'm moving a little slow."],
            ["Driver", "No worries. Want to put them in the trunk?"],
            ["You", "Yes, please. I can lift this one, but the bigger one is pretty heavy."],
            ["Driver", "I got it."],
            ["You", "Thanks. Just to confirm, the address ends in 42, right?"],
            ["Driver", "Yep, that's the one."],
            ["You", "Great. When we get there, could you drop me near the front entrance if possible?"],
            ["Driver", "Sure thing."],
            ["You", "Appreciate it. I just landed, so I'm trying to keep things simple."]
          ])
        }
      ],
      usefulExpressions: [
        "Yep, that's me.",
        "Heading to Cambridge?",
        "Thanks for waiting.",
        "I'm moving a little slow.",
        "Want to put them in the trunk?",
        "Just to confirm...",
        "Could you drop me near the front entrance?",
        "I'm trying to keep things simple."
      ],
      variations: [
        "The driver is at a different pickup zone.",
        "The address in the app is slightly wrong.",
        "You need help putting bags in the trunk.",
        "The driver asks if you are new to Boston.",
        "You need to ask for a quiet ride because you are tired."
      ],
      practiceTip:
        "Ride-share talk is mostly confirmation. Name, address, luggage, entrance. Nail those and you are fine."
    }),

    fullCard({
      id: "009",
      pack: "Arrival Pack",
      place: "Temporary Housing / Check-In",
      situation: "You arrive at your temporary place and meet the host or manager.",
      person: "Host / Building Manager",
      goal: "Check in, get keys or codes, and understand Wi-Fi, laundry, trash, and quiet hours.",
      mood: "Polite and exhausted",
      level: "Arrival / Housing",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Host", "Hey, you must be Jongkuk. Welcome."],
            ["You", "Yes, nice to meet you. Thanks for waiting. My flight took forever."],
            ["Host", "No problem. Let me give you the quick version."],
            ["You", "That would be great. I'm a little out of it after the flight."],
            ["Host", "This key is for the front door, and this one is for your room. Wi-Fi is written on the card by the desk."],
            ["You", "Perfect. Is there anything I should know about laundry or trash?"],
            ["Host", "Laundry is downstairs. Trash and recycling are in the back of the building."],
            ["You", "Got it. And are there quiet hours I should be aware of?"],
            ["Host", "Around ten on weeknights. Nothing too strict, just be mindful."],
            ["You", "Of course. I may just shower and sleep tonight."],
            ["Host", "Sounds like a plan. Let me know if you need anything."],
            ["You", "Thanks again. I really appreciate the easy check-in."]
          ])
        }
      ],
      usefulExpressions: [
        "You must be Jongkuk.",
        "Thanks for waiting.",
        "My flight took forever.",
        "Let me give you the quick version.",
        "I'm a little out of it after the flight.",
        "Is there anything I should know about laundry or trash?",
        "Just be mindful.",
        "I appreciate the easy check-in."
      ],
      variations: [
        "Your phone is almost dead and you need the door code.",
        "You arrive later than expected.",
        "You ask about laundry.",
        "You ask about quiet hours.",
        "You need to clarify which key opens which door."
      ],
      practiceTip:
        "Housing check-in is survival English. Keys, Wi-Fi, bathroom, trash, laundry, quiet hours."
    }),

    fullCard({
      id: "010",
      pack: "Arrival Pack",
      place: "Temporary Place / First Roommate Hello",
      situation: "You meet a roommate or housemate for the first time after arriving.",
      person: "Roommate",
      goal: "Introduce yourself, sound friendly, ask about kitchen basics, and leave gracefully.",
      mood: "Shy but warm",
      level: "Arrival / Social",
      versions: [
        {
          title: "Complete Natural Dialogue",
          lines: lines([
            ["Roommate", "Hey, you must be the new guest."],
            ["You", "Yeah, I'm Jongkuk. Nice to meet you."],
            ["Roommate", "I'm Alex. Did you just get in?"],
            ["You", "Yeah, I just arrived from Korea today. My brain's not fully online yet."],
            ["Roommate", "Totally fair. Don't worry about anything tonight."],
            ["You", "Thanks. I just wanted to say hi and ask one quick thing."],
            ["Roommate", "Sure, what's up?"],
            ["You", "Is there a shelf in the fridge I should use? I don't want to take anyone's space by accident."],
            ["Roommate", "Use the lower shelf for now. We usually label our food and clean up after cooking."],
            ["You", "That makes sense. I'll keep it simple tonight and get settled tomorrow."],
            ["Roommate", "Sounds good. Get some rest."],
            ["You", "Will do. Nice meeting you."]
          ])
        }
      ],
      usefulExpressions: [
        "You must be the new guest.",
        "I just arrived from Korea today.",
        "My brain's not fully online yet.",
        "I just wanted to say hi.",
        "One quick thing.",
        "I don't want to take anyone's space by accident.",
        "We usually label our food.",
        "I'll keep it simple tonight."
      ],
      variations: [
        "You ask about fridge space.",
        "You ask whether you can shower late at night.",
        "You explain that you are starting a PhD program.",
        "You cannot remember the roommate's name and ask again politely.",
        "You say you need to sleep and will talk more tomorrow."
      ],
      practiceTip:
        "Your job is not to be impressive. Sound kind, easy to live with, and ready to learn the house rhythm."
    }),

    outlineCard({
      id: "011",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Apartment Kitchen",
      situation: "You run into a roommate in the kitchen on your first morning.",
      person: "Roommate",
      goal: "Greet them, ask about coffee, fridge space, dishes, and the day's plan.",
      topics: ["morning greeting", "coffee machine", "fridge space", "dishes", "daily schedule"]
    }),
    outlineCard({
      id: "012",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Apartment Hallway / Elevator",
      situation: "You meet a neighbor for the first time after moving in.",
      person: "Neighbor",
      goal: "Say hello, mention that you just moved in, and ask a light neighborhood question.",
      topics: ["small talk", "new neighbor", "floor number", "neighborhood feel"]
    }),
    outlineCard({
      id: "013",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Building Management Office",
      situation: "You need basic information about living in the building.",
      person: "Building Manager",
      goal: "Ask about mail, packages, laundry, trash, heat, and hot water.",
      topics: ["mailbox", "packages", "laundry", "trash", "maintenance"]
    }),
    outlineCard({
      id: "014",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Neighborhood Street",
      situation: "You are walking around and need directions.",
      person: "Passerby",
      goal: "Ask where the nearest subway, cafe, or market is and confirm walking time.",
      topics: ["directions", "nearest station", "walking time", "street crossing"]
    }),
    outlineCard({
      id: "015",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Gym Reception",
      situation: "You visit a gym for the first time and ask about membership.",
      person: "Gym Staff",
      goal: "Ask about membership, day passes, lockers, towels, hours, and showers.",
      topics: ["membership", "day pass", "locker", "towel", "hours", "shower"]
    }),
    outlineCard({
      id: "016",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Gym Equipment Area",
      situation: "You want to use a machine that someone else may be using.",
      person: "Gym Member",
      goal: "Ask if the machine is free, how many sets remain, and whether you can work in.",
      topics: ["machine in use", "sets left", "work in", "form question"]
    }),
    outlineCard({
      id: "017",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Gym Locker Room",
      situation: "Your locker will not open or you lost something.",
      person: "Gym Staff / Member",
      goal: "Explain a locker issue, ask for help, or ask about lost and found.",
      topics: ["locker problem", "forgot code", "lost item", "towel request"]
    }),
    outlineCard({
      id: "018",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Neighborhood Cafe",
      situation: "You order coffee on your first morning in Boston.",
      person: "Barista",
      goal: "Order clearly, answer follow-up questions, and pay by card.",
      topics: ["iced latte", "milk choice", "for here", "to go", "name", "tip screen"]
    }),
    outlineCard({
      id: "019",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Cafe Table",
      situation: "You need a seat, an outlet, or someone to watch your laptop for a minute.",
      person: "Cafe Customer / Student",
      goal: "Ask politely about a seat, outlet, or quick favor.",
      topics: ["empty seat", "outlet", "watch my stuff", "laptop work"]
    }),
    outlineCard({
      id: "020",
      pack: "Morning Routine Pack",
      dayType: "Weekday",
      place: "Grocery Store",
      situation: "You buy basic food and household items.",
      person: "Store Staff / Cashier",
      goal: "Ask where items are, use self-checkout, and handle bags, rewards, and receipt.",
      topics: ["item location", "self-checkout", "membership", "bag", "receipt"]
    }),

    outlineCard({
      id: "021",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Campus Entrance",
      situation: "You arrive on campus for the first time and need to find a building.",
      person: "Security Staff / Student",
      goal: "Explain why you are there and ask for directions to your department.",
      topics: ["department building", "student ID not ready", "visitor purpose", "directions"]
    }),
    outlineCard({
      id: "022",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "International Student Office",
      situation: "You need visa and orientation guidance.",
      person: "International Student Advisor",
      goal: "Ask about I-20, address registration, orientation, insurance, and emergency contacts.",
      topics: ["I-20", "visa", "address", "orientation", "health insurance"]
    }),
    outlineCard({
      id: "023",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Department Office",
      situation: "You visit your department office for the first time.",
      person: "Department Administrator",
      goal: "Introduce yourself as a new PhD student and ask about registration and studio space.",
      topics: ["new PhD student", "advisor", "course registration", "mailing list", "studio desk"]
    }),
    outlineCard({
      id: "024",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Student ID Office",
      situation: "You need to get your student ID card.",
      person: "ID Office Staff",
      goal: "Confirm your name, take a photo, receive the card, and ask about access.",
      topics: ["name check", "photo", "card pickup", "building access", "library access"]
    }),
    outlineCard({
      id: "025",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Library",
      situation: "You ask how to use the library and find architecture resources.",
      person: "Librarian",
      goal: "Ask about borrowing, quiet areas, printers, scanners, and architecture materials.",
      topics: ["borrowing", "quiet seat", "printer", "scanner", "architecture books"]
    }),
    outlineCard({
      id: "026",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Print / Copy Room",
      situation: "Printing or scanning does not work as expected.",
      person: "Staff / Student",
      goal: "Ask how to print, scan, pay, and fix an error.",
      topics: ["print file", "paper size", "black and white", "color", "scan", "error"]
    }),
    outlineCard({
      id: "027",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Architecture Studio",
      situation: "You meet classmates and get assigned a studio space.",
      person: "Classmate",
      goal: "Introduce yourself and talk about background, interests, and working style.",
      topics: ["self-introduction", "country", "background", "architecture interests", "work habits"]
    }),
    outlineCard({
      id: "028",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Professor's Office",
      situation: "You have your first meeting with a professor or advisor.",
      person: "Professor / Advisor",
      goal: "Introduce your background, research interests, and English concerns politely.",
      topics: ["research interest", "Korea experience", "future direction", "English confidence"]
    }),
    outlineCard({
      id: "029",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Seminar Room",
      situation: "You introduce yourself in your first class.",
      person: "Professor / Classmates",
      goal: "Give a short self-introduction about name, background, and interests.",
      topics: ["name", "home country", "academic background", "PhD interests", "learning goal"]
    }),
    outlineCard({
      id: "030",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Classroom",
      situation: "You ask a student next to you about readings or assignments.",
      person: "Classmate",
      goal: "Ask about materials, deadlines, missed information, and study together.",
      topics: ["reading", "assignment deadline", "missed detail", "study together"]
    }),
    outlineCard({
      id: "031",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Campus Cafeteria",
      situation: "You order lunch and look for a place to sit.",
      person: "Server / Student",
      goal: "Order food, ask about allergies or vegetarian options, and join a table.",
      topics: ["menu", "vegetarian", "allergy", "sit together", "class talk", "Korean food"]
    }),
    outlineCard({
      id: "032",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Makerspace / Fab Lab",
      situation: "You need to learn how to use equipment safely.",
      person: "Technician",
      goal: "Ask about 3D printers, laser cutters, woodshop tools, safety training, and booking.",
      topics: ["3D printer", "laser cutter", "woodshop", "safety training", "booking"]
    }),
    outlineCard({
      id: "033",
      pack: "Campus First Week Pack",
      dayType: "Weekday",
      place: "Architecture Review Space",
      situation: "You present a design idea and respond to critique.",
      person: "Professor / Guest Critic / Classmate",
      goal: "Explain concept, site analysis, drawings, and respond to feedback.",
      topics: ["project concept", "site analysis", "modular system", "drawings", "critique"]
    }),

    outlineCard({
      id: "034",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Restaurant Near Campus",
      situation: "You eat dinner alone or order takeout.",
      person: "Server",
      goal: "Ask for a table, order food, ask for recommendations, takeout, spice level, and check.",
      topics: ["table for one", "recommendation", "takeout", "spicy", "check"]
    }),
    outlineCard({
      id: "035",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Food Truck",
      situation: "You order quickly while people are waiting behind you.",
      person: "Food Truck Staff / Person in Line",
      goal: "Choose a menu item, sauce, card payment, wait time, and line confirmation.",
      topics: ["menu", "sauce", "card", "wait time", "line"]
    }),
    outlineCard({
      id: "036",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Asian Market",
      situation: "You look for Korean ingredients and checkout items.",
      person: "Store Staff / Cashier",
      goal: "Ask for rice, kimchi, gochujang, ramen, bags, and payment.",
      topics: ["rice", "kimchi", "gochujang", "ramen", "checkout"]
    }),
    outlineCard({
      id: "037",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Laundry Room / Laundromat",
      situation: "You do laundry but do not understand the machine or payment system.",
      person: "Neighbor / Manager",
      goal: "Ask how to use washer, dryer, app payment, stopped machine, or moved clothes.",
      topics: ["washer", "dryer", "app payment", "machine stopped", "moved laundry"]
    }),
    outlineCard({
      id: "038",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Apartment Living Room",
      situation: "You need to discuss shared living rules.",
      person: "Roommate",
      goal: "Talk about cleaning, noise, guests, kitchen use, and shared supplies.",
      topics: ["cleaning", "noise", "guests", "kitchen", "shared supplies"]
    }),
    outlineCard({
      id: "039",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Building Maintenance Request",
      situation: "Something in the apartment needs to be fixed.",
      person: "Manager / Repair Technician",
      goal: "Report heat, hot water, window, internet, or scheduling problems.",
      topics: ["heat", "hot water", "window", "internet", "visit time"]
    }),
    outlineCard({
      id: "040",
      pack: "Evening Problem Solving Pack",
      dayType: "Weekday",
      place: "Customer Service Call / Chat",
      situation: "You need help with internet, delivery, payment, or a reservation.",
      person: "Customer Service Agent",
      goal: "Verify account, explain the problem, ask for refund, address change, or booking change.",
      topics: ["account", "delayed delivery", "refund", "address change", "reservation"]
    }),

    outlineCard({
      id: "041",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Museum of Fine Arts Boston",
      situation: "You visit a major museum and ask about exhibits.",
      person: "Ticket Staff / Guide / Visitor",
      goal: "Buy a ticket, ask about student discount, exhibition location, audio guide, and artwork.",
      topics: ["ticket", "student discount", "exhibition", "audio guide", "art comment"]
    }),
    outlineCard({
      id: "042",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Contemporary Art Gallery",
      situation: "You visit a small gallery and talk about the exhibition.",
      person: "Gallerist / Artist / Visitor",
      goal: "Ask about the artist, intention, spatial layout, and share a natural reaction.",
      topics: ["artist", "intention", "space", "impression", "exhibition"]
    }),
    outlineCard({
      id: "043",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Architecture Tour / Urban Walk",
      situation: "You join a tour or field walk around Boston.",
      person: "Tour Guide / Participant",
      goal: "Ask about history, urban context, material, preservation, and development.",
      topics: ["history", "urban context", "materials", "preservation", "development"]
    }),
    outlineCard({
      id: "044",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Boston Public Library",
      situation: "You want to use the library, read, study, or take photos.",
      person: "Librarian / Visitor",
      goal: "Ask about membership, reading rooms, architecture books, quiet seats, and photos.",
      topics: ["membership", "reading room", "architecture books", "quiet seat", "photos"]
    }),
    outlineCard({
      id: "045",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Bookstore",
      situation: "You search for architecture books or English learning books.",
      person: "Bookseller / Customer",
      goal: "Ask for recommendations, sections, special orders, and checkout.",
      topics: ["recommendation", "PhD prep", "design section", "architecture", "order"]
    }),
    outlineCard({
      id: "046",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Newbury Street / Design Shop",
      situation: "You browse a design shop and talk to a store associate.",
      person: "Store Associate",
      goal: "Ask about product, price, material, gift wrapping, or say you are just browsing.",
      topics: ["product", "price", "material", "gift wrap", "just browsing"]
    }),
    outlineCard({
      id: "047",
      pack: "Weekend Culture Pack",
      dayType: "Weekend",
      place: "Charles River",
      situation: "You walk, jog, or take photos near the river.",
      person: "Runner / Tourist / Student",
      goal: "Ask for a photo, talk about weather, jogging routes, school, or new life in Boston.",
      topics: ["photo request", "weather", "jogging route", "school life", "new in Boston"]
    }),

    outlineCard({
      id: "048",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "Fenway Park",
      situation: "You go to a baseball game.",
      person: "Ticket Staff / Security / Fan",
      goal: "Confirm ticket, find seat, ask baseball rules, talk about teams and atmosphere.",
      topics: ["ticket", "seat", "baseball rules", "team", "atmosphere"]
    }),
    outlineCard({
      id: "049",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "TD Garden",
      situation: "You attend a basketball game, hockey game, or concert.",
      person: "Usher / Security / Fan",
      goal: "Ask about gate, bag check, seats, team, and getting home after the event.",
      topics: ["gate", "bag check", "seat", "team", "after event"]
    }),
    outlineCard({
      id: "050",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "Sports Bar",
      situation: "You watch a game and make small talk.",
      person: "Bartender / Person Next to You",
      goal: "Order a drink, talk about teams, say you are new to the sport, and split the bill.",
      topics: ["team", "rules", "drink order", "atmosphere", "split bill"]
    }),
    outlineCard({
      id: "051",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "Movie Theater",
      situation: "You buy a movie ticket and find your seat.",
      person: "Theater Staff / Moviegoer",
      goal: "Ask about tickets, showtime, subtitles, popcorn, and seats.",
      topics: ["ticket", "showtime", "subtitles", "popcorn", "seat"]
    }),
    outlineCard({
      id: "052",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "Concert Hall / Performance Venue",
      situation: "You attend a performance.",
      person: "Usher / Audience Member",
      goal: "Ask about entrance time, program, seat, intermission, and reaction after the show.",
      topics: ["entrance time", "program", "seat", "intermission", "reaction"]
    }),
    outlineCard({
      id: "053",
      pack: "Sports & Social Pack",
      dayType: "Weekend",
      place: "Classmate's Apartment",
      situation: "You are invited to a classmate's place.",
      person: "Classmate / Friends",
      goal: "Ask what to bring, introduce Korean food, talk about research, and suggest meeting again.",
      topics: ["what to bring", "Korean food", "introduction", "research", "meet again"]
    }),

    outlineCard({
      id: "054",
      pack: "Church & Community Pack",
      dayType: "Sunday",
      place: "Church Entrance",
      situation: "You visit a church for the first time.",
      person: "Welcome Volunteer",
      goal: "Say it is your first time, ask about service time, seating, and newcomer guidance.",
      topics: ["first time", "service time", "where to sit", "newcomer"]
    }),
    outlineCard({
      id: "055",
      pack: "Church & Community Pack",
      dayType: "Sunday",
      place: "Sanctuary",
      situation: "You greet someone before service starts.",
      person: "Person Sitting Nearby",
      goal: "Say hello, explain why you came to Boston, mention school, and ask about service order.",
      topics: ["hello", "new to Boston", "school", "service order"]
    }),
    outlineCard({
      id: "056",
      pack: "Church & Community Pack",
      dayType: "Sunday",
      place: "After-Service Coffee Time",
      situation: "You talk with church members after service.",
      person: "Church Member / Pastor / Newcomer Host",
      goal: "Introduce yourself, talk about study life, major, Boston adjustment, and small groups.",
      topics: ["self-introduction", "study life", "major", "Boston adjustment", "small group"]
    }),
    outlineCard({
      id: "057",
      pack: "Church & Community Pack",
      dayType: "Sunday",
      place: "Small Group Meeting",
      situation: "You attend a church small group for the first time.",
      person: "Group Leader / Members",
      goal: "Introduce yourself, share briefly, talk about adjustment, prayer requests, and next meeting.",
      topics: ["introduction", "faith background", "adjustment", "prayer request", "next meeting"]
    }),
    outlineCard({
      id: "058",
      pack: "Church & Community Pack",
      dayType: "Sunday",
      place: "Church Lunch",
      situation: "You have lunch with church members.",
      person: "Church Members",
      goal: "Talk naturally about food, Korea, school, family, and neighborhood recommendations.",
      topics: ["food", "Korea", "school", "family", "neighborhood"]
    }),

    outlineCard({
      id: "059",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Pharmacy",
      situation: "You need medicine for a minor symptom.",
      person: "Pharmacist / Store Staff",
      goal: "Explain symptoms and ask about over-the-counter medicine, directions, drowsiness, and insurance.",
      topics: ["symptoms", "over the counter", "directions", "drowsy", "insurance"]
    }),
    outlineCard({
      id: "060",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Clinic / Hospital",
      situation: "You need to make an appointment or see a doctor.",
      person: "Receptionist / Nurse / Doctor",
      goal: "Explain appointment, insurance, symptoms, pain location, and prescription needs.",
      topics: ["appointment", "insurance", "symptoms", "pain", "prescription"]
    }),
    outlineCard({
      id: "061",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Bank",
      situation: "You open a bank account in the U.S.",
      person: "Bank Staff",
      goal: "Ask about checking account, debit card, wire transfer, proof of address, and fees.",
      topics: ["checking account", "debit card", "wire transfer", "address proof", "fee"]
    }),
    outlineCard({
      id: "062",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Mobile Phone Store",
      situation: "You need a U.S. phone number or a new plan.",
      person: "Store Staff",
      goal: "Ask about prepaid, monthly plans, eSIM, data, and payment issues.",
      topics: ["prepaid", "monthly", "eSIM", "data", "payment"]
    }),
    outlineCard({
      id: "063",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Post Office / Delivery Center",
      situation: "You send or pick up a package.",
      person: "Postal Worker",
      goal: "Ask about address forms, shipping cost, tracking number, international shipping, and lost package.",
      topics: ["address", "shipping cost", "tracking", "international", "lost package"]
    }),
    outlineCard({
      id: "064",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Lost and Found / Police Station",
      situation: "You lost your wallet, passport, or phone.",
      person: "Staff / Police Officer",
      goal: "Describe the lost item, last location, contact info, report form, and temporary documents.",
      topics: ["last seen", "item description", "contact info", "report", "temporary document"]
    }),
    outlineCard({
      id: "065",
      pack: "Emergency Pack",
      dayType: "Anytime",
      place: "Hair Salon",
      situation: "You get a haircut and need to explain what you want.",
      person: "Hair Stylist",
      goal: "Explain length, sides, back, show a photo, ask not too short, and handle price and tip.",
      topics: ["length", "sides", "back", "not too short", "photo", "tip"]
    })
  ];
})();
