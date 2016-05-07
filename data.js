var data = {
	'Chicago': {
		'prompt': "YOU'RE SETTING OFF FROM CHICAGO. YOU DECIDE TO:",
		'choices': [
			{
				'type': 'new_job-higher_income',
				'param': 'BUY_CAR',
				'title': "Promotion to VP of Train Conduction",
				'description': "You'll use the extra income to add a new car to your train.",
				'cash_change': 0,
				'salary_change': 4000,
			},

			{
				'type': 'new_job-lower_income',
				'param': 'FILE_BANKRUPTCY',
				'title': "Busser for First Class Car",
				'description': "You barely make ends meet and filed for bankruptcy, but hey... it's first class!",
				'cash_change': 0,
				'salary_change': -1000,
			},

			{
				'type': 'win_large_sum',
				'param': 'EX_TRASHES_YOUR_CREDIT',
				'title': "Lottery Winner!",
				'description': "You win $500,000! Spend it wisely... May we suggest to invest?",
				'cash_change': 500000,
				'salary_change': 0,
			}
		]
	},

	'Iowa': {
		'prompt': "WELCOME TO IOWA! IT'S TIME TO:",
		'choices': [
			{
				'type': 'start_college',
				'param': 'ADD_NEW_STUDENT_LOAN',
				'title': "Go to Train Engineering School",
				'description': "Your train will run more efficiently and eventually you'll pay off your school loans!",
				'cash_change': 0,
				'salary_change': -150,
			},

			{
				'type': 'big_mortgage',
				'param': 'HOME_EQUITY_LINE',
				'title': "Buy some ranchin' land!",
				'description': "Get a nice piece of land, someday you might want to settle down!",
				'cash_change': 0,
				'salary_change': -500,
			},

			{
				'type': 'misuse-pii',
				'param': 'TAKE_SELFIE_WITH_DRIVERS_LICENSE',
				'title': "Focus on the open tracks!",
				'description': "Instead of paying attention you take a selfie with your official conductors club card and post it online...",
				'cash_change': -5000,
				'salary_change': 0,
			}
		]
	},
		
	'Denver': {
		'prompt': "HEADING THROUGH DENVER UP INTO THE ROCKY MOUNTAINS YOU NEED:",
		'choices': [
			{
				'type': 'divorce',
				'param': 'NO_EFFECT',
				'title': "A divorce!",
				'description': "Sometimes it just doesn't work out, they drained your wallet anyways!",
				'cash_change': 5000,
				'salary_change': 1000,
			},

			{
				'type': 'breach_at_netflix',
				'param': 'POSSIBLE_CREDIT_CARD_INFO_STOLEN',
				'title': "To change your credit card info!",
				'description': "What else is there to do on a train rolling through the Rocky Mountains other than stream Netflix. There was a breach and you may have been affected!",
				'cash_change': 1000,
				'salary_change': 0,
			},

			{
				'type': 'bad_waiter',
				'param': 'REPORTED',
				'title': "A new place to eat!",
				'description': "Your waiter in the first class car stole your card and copied it. You took the right measures and handle it well though!",
				'cash_change': 1000,
				'salary_change': 0,
			}
		]
	},

	'Aspen': {
		'prompt': "YOU'VE REACHED ASPEN, COLORADO TIME TO HIT THE SLOPES AND GET:",
		'choices': [
			{
				'type': 'unexpected_medical_expense',
				'param': 'PAY_EXPENSE',
				'title': "A cast for your broken leg!",
				'description': "You went skiing and took a serious fall, just pay the bill and get back on the slopes!",
				'cash_change': 1000,
				'salary_change': 0,
			},

			{
				'type': 'big_mortgage',
				'param': 'HOME_EQUITY_LINE',
				'title': "A timeshare!",
				'description': "You're practically stealing condos at this price!",
				'cash_change': -8000,
				'salary_change': 0,
			},

			{
				'type': 'new_job-lower_income',
				'param': 'LATE_30_DAYS',
				'title': "Into cooking!",
				'description': "Inspired by a world renowned fast-food chef here in Aspen you decide to pursue your dream as the head assistant to the part-time chef on your train... Don't forget that you have payments to make.",
				'cash_change': 0,
				'salary_change': -1000,
			}
		]
	},

	'Vegas': {
		'prompt': "WHAT HAPPENS IN VEGAS, STAYS IN VEGAS... OR DOES IT:",
		'choices': [
			{
				'type': 'DUI',
				'param': 'NO_EFFECT',
				'title': "Driving under the influence...",
				'description': "Hey, just because it's a train doesn't mean it's legal! Vegas baby!",
				'cash_change': -15000,
				'salary_change': -1000,
			},

			{
				'type': 'marriage-amazing_spousal_credit',
				'param': 'EFFECTS_SCORE',
				'title': "Get hitched!",
				'description': "You just met, but their credit is too good not to lock down! Vegas baby!",
				'cash_change': 0,
				'salary_change': 4000,
			},

			{
				'type': 'win_large_sum',
				'param': 'EX_TRASHES_YOUR_CREDIT',
				'title': "Hit it big!",
				'description': "By big we mean you hit a $25,000 jackpot but you've already lost $30,000... Vegas baby!",
				'cash_change': -5000,
				'salary_change': 0,
			}
		]
	},

	'Death_Valley': {
		'prompt': "PASSING THROUGH DEATH VALLEY MIGHT BE ROUGH, GET:",
		'choices': [
			{
				'type': 'unexpected_medical_expense',
				'param': 'SEEK_LOANS',
				'title': "Heat stroke...",
				'description': "Well, it is the hottest place on Earth... you need to figure out how to pay those medical bills.",
				'cash_change': -2000,
				'salary_change': 0,
			},

			{
				'type': 'zombie_apocalypse',
				'param': 'CREDIT_IS_IRRELEVANT',
				'title': "THE HELL OUT OF HERE!",
				'description': "Is that a zombie in the distance?!",
				'cash_change': 0,
				'salary_change': 0,
			},

			{
				'type': 'win_large_sum',
				'param': 'NO_EFFECT',
				'title': "Free Money",
				'description': "A mysterious man standing next to a cactus hands you a briefcase.",
				'cash_change': 10000,
				'salary_change': 0,
			}
		]
	},

	'SLO': {
		'prompt': "WE HAVED ARRIVED IN SAN LUIS OBISPO DON'T FORGET TO:",
		'choices': [
			{
				'type': 'gradute_college',
				'param': 'PAY_LOANS_ON_TIME',
				'title': "Pay off student loans!",
				'description': "You've made it across the country and through college time to pay off those loans!",
				'cash_change': -10000,
				'salary_change': 0,
			},

			{
				'type': 'forgot_to_shred_mail',
				'param': 'IDENTITY_STOLEN',
				'title': "...Shred. Your. Mail.",
				'description': "You forgot to shred your mail in Chicago. Somebody else is you now, congrats!",
				'cash_change': -5000,
				'salary_change': 0,
			},

			{
				'type': 'new_job-higher_income',
				'param': 'BUY_CAR',
				'title': "Ask for a promotion!",
				'description': "You worked really hard to make it here! Maybe your worth of a promotion, but more importantly that new boat!",
				'cash_change': -40000,
				'salary_change': 7000,
			}
		]
	}
}
