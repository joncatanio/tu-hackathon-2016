var data = {
	'Chicago': {
		'prompt': "YOU'RE SETTING OFF FROM CHICAGO. YOU DECIDE TO:",
		'choices': [
			{
				'type': 'new_job-higher_income',
				'param': 'BUY_CAR',
            'title': "PROMOTION TO VP OF TRAIN CONDUCTION",
				'description': "You'll use the extra income to add a new car to your train.",
				'cash_change': 0,
				'salary_change': 4000,
				'icon': 'images/icons/biz.png',
			},

			{
				'type': 'new_job-lower_income',
				'param': 'FILE_BANKRUPTCY',
            'title': "BUSSER FOR FIRST CLASS CAR",
				'description': "You barely make ends meet and filed for bankruptcy, but hey... it's first class!",
				'cash_change': 0,
				'salary_change': -1000,
				'icon': 'images/icons/biz.png',
			},

			{
				'type': 'win_large_sum',
				'param': 'NO_EFFECT',
				'title': "LOTTERY WINNER!",
				'description': "You win $500,000! Spend it wisely... May we suggest to invest?",
				'cash_change': 500000,
				'salary_change': 0,
				'icon': 'images/icons/dollar.png',
			}
		]
	},

	'Iowa': {
		'prompt': "WELCOME TO IOWA! IT'S TIME TO:",
		'choices': [
			{
				'type': 'start_college',
				'param': 'ADD_NEW_STUDENT_LOAN',
				'title': "GO TO TRAIN ENGINEERING SCHOOL",
				'description': "Your train will run more efficiently and eventually you'll pay off your school loans!",
				'cash_change': 0,
				'salary_change': -150,
				'icon': 'images/icons/grad.png',
			},

			{
				'type': 'big_mortgage',
				'param': 'HOME_EQUITY_LINE',
				'title': "BUY SOME RANCHIN' LAND!",
				'description': "Get a nice piece of land, someday you might want to settle down!",
				'cash_change': 0,
				'salary_change': -500,
				'icon': 'images/icons/mortgage.png',
			},

			{
				'type': 'misuse-pii',
				'param': 'TAKE_SELFIE_WITH_DRIVERS_LICENSE',
				'title': "FOCUS ON THE OPEN TRACKS!",
				'description': "Instead of paying attention you take a selfie with your official conductors club card and post it online...",
				'cash_change': -5000,
				'salary_change': 0,
				'icon': 'images/icons/phone.png',
			}
		]
	},
		
	'Denver': {
		'prompt': "HEADING THROUGH DENVER UP INTO THE ROCKY MOUNTAINS YOU NEED:",
		'choices': [
			{
				'type': 'divorce',
				'param': 'NO_EFFECT',
				'title': "A DIVORCE!",
				'description': "Sometimes it just doesn't work out, they drained your wallet anyways!",
				'cash_change': 5000,
				'salary_change': 1000,
				'icon': 'images/icons/wedding.png',
			},

			{
				'type': 'breach_at_netflix',
				'param': 'POSSIBLE_CREDIT_CARD_INFO_STOLEN',
				'title': "TO CHANGE YOUR CREDIT CARD INFO!",
				'description': "What else is there to do on a train rolling through the Rocky Mountains other than stream Netflix. There was a breach and you may have been affected!",
				'cash_change': 1000,
				'salary_change': 0,
				'icon': 'images/icons/unlock.png',
			},

			{
				'type': 'bad_waiter',
				'param': 'REPORTED',
				'title': "A NEW PLACE TO EAT!",
				'description': "Your waiter in the first class car stole your card and copied it. You took the right measures and handle it well though!",
				'cash_change': 1000,
				'salary_change': 0,
				'icon': 'images/icons/cc.png',
			}
		]
	},

	'Aspen': {
		'prompt': "YOU'VE REACHED ASPEN, COLORADO TIME TO HIT THE SLOPES AND GET:",
		'choices': [
			{
				'type': 'unexpected_medical_expense',
				'param': 'PAY_EXPENSE',
				'title': "A CAST FOR YOUR BROKEN LEG!",
				'description': "You went skiing and took a serious fall, just pay the bill and get back on the slopes!",
				'cash_change': 1000,
				'salary_change': 0,
				'icon': 'images/icons/doc.png',
			},

			{
				'type': 'big_mortgage',
				'param': 'HOME_EQUITY_LINE',
				'title': "A TIMESHARE!",
				'description': "You're practically stealing condos at this price!",
				'cash_change': -8000,
				'salary_change': 0,
				'icon': 'images/icons/mortgage.png',
			},

			{
				'type': 'new_job-lower_income',
				'param': 'LATE_30_DAYS',
				'title': "INTO COOKING!",
				'description': "Inspired by a world renowned fast-food chef here in Aspen you decide to pursue your dream as the head assistant to the part-time chef on your train... Don't forget that you have payments to make.",
				'cash_change': 0,
				'salary_change': -1000,
				'icon': 'images/icons/biz.png',
			}
		]
	},

	'Vegas': {
		'prompt': "WHAT HAPPENS IN VEGAS, STAYS IN VEGAS... OR DOES IT:",
		'choices': [
			{
				'type': 'DUI',
				'param': 'NO_EFFECT',
				'title': "DRIVING UNDER THE INFLUENCE...",
				'description': "Hey, just because it's a train doesn't mean it's legal! Vegas baby!",
				'cash_change': -15000,
				'salary_change': -1000,
				'icon': 'images/icons/fraud.png',
			},

			{
				'type': 'marriage-amazing_spousal_credit',
				'param': 'EFFECTS_SCORE',
				'title': "GET HITCHED!",
				'description': "You just met, but their credit is too good not to lock down! Vegas baby!",
				'cash_change': 0,
				'salary_change': 4000,
				'icon': 'images/icons/wedding.png',
			},

			{
				'type': 'win_large_sum',
				'param': 'EX_TRASHES_YOUR_CREDIT',
				'title': "HIT IT BIG!",
				'description': "By big we mean you hit a $25,000 jackpot but you've already lost $30,000... Vegas baby!",
				'cash_change': -5000,
				'salary_change': 0,
				'icon': 'images/icons/dollar.png',
			}
		]
	},

	'Death_Valley': {
		'prompt': "PASSING THROUGH DEATH VALLEY MIGHT BE ROUGH, GET:",
		'choices': [
			{
				'type': 'unexpected_medical_expense',
				'param': 'SEEK_LOANS',
				'title': "HEAT STROKE...",
				'description': "Well, it is the hottest place on Earth... you need to figure out how to pay those medical bills.",
				'cash_change': -2000,
				'salary_change': 0,
				'icon': 'images/icons/doc.png',
			},

			{
				'type': 'zombie_apocalypse',
				'param': 'CREDIT_IS_IRRELEVANT',
				'title': "THE HELL OUT OF HERE!",
				'description': "Is that a zombie in the distance?!",
				'cash_change': 0,
				'salary_change': 0,
				'icon': 'images/icons/doc.png',
			},

			{
				'type': 'win_large_sum',
				'param': 'NO_EFFECT',
				'title': "FREE MONEY",
				'description': "A mysterious man standing next to a cactus hands you a briefcase.",
				'cash_change': 10000,
				'salary_change': 0,
				'icon': 'images/icons/dollar.png',
			}
		]
	},

	'SLO': {
		'prompt': "WE HAVED ARRIVED IN SAN LUIS OBISPO DON'T FORGET TO:",
		'choices': [
			{
				'type': 'gradute_college',
				'param': 'PAY_LOANS_ON_TIME',
				'title': "PAY OFF STUDENT LOANS!",
				'description': "You've made it across the country and through college time to pay off those loans!",
				'cash_change': -10000,
				'salary_change': 0,
				'icon': 'images/icons/grad.png',
			},

			{
				'type': 'stolen_debit_card',
				'param': 'REPORTED',
				'title': "...SHRED. YOUR. MAIL.",

				'description': "You forgot to shred your mail in Chicago. Somebody else is you now, congrats!",
				'cash_change': -5000,
				'salary_change': 0,
				'icon': 'images/icons/fraud.png',
			},

			{
				'type': 'new_job-higher_income',
				'param': 'BUY_CAR',
				'title': "ASK FOR A PROMOTION!",
				'description': "You worked really hard to make it here! Maybe your worth of a promotion, but more importantly that new boat!",
				'cash_change': -40000,
				'salary_change': 7000,
				'icon': 'images/icons/biz.png',
			}
		]
	}
}
