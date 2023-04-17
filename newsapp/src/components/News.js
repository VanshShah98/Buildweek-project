import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "The Feed",
            "title": "Elon Musk shares adorable photo of his newborn, captions it 'Archangel-12'",
            "description": "Twitter CEO Elon Musk regularly shares adorable pictures of his son. The billionaire recently posted a collage of photos featuring his kid X A-Xii, Xavier.",
            "url": "https://economictimes.indiatimes.com/news/new-updates/elon-musk-shares-adorable-photo-of-his-newborn-captions-it-archangel-12/articleshow/98770676.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98770674,width-1070,height-580,imgsize-3900,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-03-19T08:15:00Z",
            "content": "Twitter CEO Elon Musk recently posted a picture collage of his newborn, Xavier. The little munchkin grabbed swoons from online users, who showered the infant with their love.Elon Musk is a regular Tw… [+1479 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Water wonder: 6 stunning island hotels opening around the world in 2023",
            "description": "Plan a trip to these notable reopenings in some of the world’s most beloved tropical locales.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/wonder-water-6-stunning-island-hotels-opening-around-the-world-in-2023/articleshow/98768049.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98768263,width-1070,height-580,imgsize-320614,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-03-19T05:47:31Z",
            "content": "Island vacations have staying power, as proved by the sustained demand over the past three years. But in 2023 these trips are getting major upgrades in the form of new hotels and notable reopenings i… [+7162 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Wonder water: 7 stunning island hotels opening around the world in 2023",
            "description": "Plan a trip to these notable reopenings in some of the world’s most beloved tropical locales.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/wonder-water-7-stunning-island-hotels-opening-around-the-world-in-2023/articleshow/98768049.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98768263,width-1070,height-580,imgsize-320614,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-03-19T05:47:31Z",
            "content": "Island vacations have staying power, as proved by the sustained demand over the past three years. But in 2023 these trips are getting major upgrades in the form of new hotels and notable reopenings i… [+7162 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Contrive Datum Insights Pvt Ltd",
            "title": "Smart E Drive Market is projected to Reach US$ 14467.59 Million by 2030, at a CAGR of 35.90% during the forecast period 2023-2030, Data By Contrive Datum Insights",
            "description": "According to a market research study published by Contrive Datum Insights, Europe achieved the largest market share, Asia Pacific is likely to witness the...",
            "url": "https://finance.yahoo.com/news/smart-e-drive-market-projected-040000719.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/3_UKY5mJnrT5vVNiFqXy5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD00MDc-/https://media.zenfs.com/en/globenewswire.com/217423fe6972b99638a38f86493e4e22",
            "publishedAt": "2023-03-19T04:00:00Z",
            "content": "Contrive Datum Insights Pvt Ltd\r\nAccording to a market research study published by Contrive Datum Insights, Europe achieved the largest market share, Asia Pacific is likely to witness the fastest gro… [+11631 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Contrive Datum Insights Pvt Ltd",
            "title": "Smart E Drive Market is projected to Reach US$ 14467.59 Million by 2030, at a CAGR of 35.90% during the forecast period 2023-2030, Data By Contrive Datum Insights",
            "description": "According to a market research study published by Contrive Datum Insights, Europe achieved the largest market share, Asia Pacific is likely to witness the fastest growth rate during the forecast period According to a market research study published by Contriv…",
            "url": "https://www.globenewswire.com/news-release/2023/03/19/2629838/0/en/Smart-E-Drive-Market-is-projected-to-Reach-US-14467-59-Million-by-2030-at-a-CAGR-of-35-90-during-the-forecast-period-2023-2030-Data-By-Contrive-Datum-Insights.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/e924a48a-ff3e-40a2-b9ee-63db66054b57",
            "publishedAt": "2023-03-19T04:00:00Z",
            "content": "Farmington, March 19, 2023 (GLOBE NEWSWIRE) -- The global Smart E Drive Market\r\n size was valued at USD 915 Million in 2022 and is projected to reach USD 14467.59 Million by 2030, growing at a CAGR o… [+11364 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Nathan Bomey",
            "title": "Midsizes ask FDIC to insure ALL deposits...",
            "description": "Midsizes ask FDIC to insure ALL deposits...\r\n\n \n \n \n (Third column, 2nd story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Big banks may get bigger as crisis swamps 'too big to fail' worries...\r\nNearly 200 at risk...\r\nFears return to haunt global stocks...\r\nDimon play…",
            "url": "https://www.axios.com/2023/03/19/svb-fdic-signature-bank-midsize-banks",
            "urlToImage": "https://images.axios.com/3M1AEEfqcHlhqiILBDIe5AC4cyA=/0x790:7739x5143/1366x768/2023/03/19/1679189142779.jpg",
            "publishedAt": "2023-03-19T02:55:36Z",
            "content": "A coalition of midsize U.S. banks is calling on the government to insure all deposits for the next two years, in the wake of Silicon Valley Bank's emergency rescue that insured all of the firm's depo… [+1623 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Matt Novak, Contributor, \n Matt Novak, Contributor\n https://www.forbes.com/sites/mattnovak/",
            "title": "Elon Musk Says Trump Will Win ‘Landside Victory’ If Indicted",
            "description": "Elon Musk, the billionaire CEO of several companies, claims Donald Trump will win the 2024 presidential election if the former president is indicted.",
            "url": "https://www.forbes.com/sites/mattnovak/2023/03/18/elon-musk-says-trump-will-win-landside-victory-if-indicted/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/641668f23b0bad362e7ffb6c/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-03-19T02:31:01Z",
            "content": "President Donald Trump speaks during a signing ceremony for the Americas Water Infrastructure Act of ... [+] 2018 in the Oval Office of the White House on October 23, 2018 in Washington, DC. (Photo b… [+3287 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yanko Design"
            },
            "author": "Sarang Sheth",
            "title": "The ‘Tesla of Ovens’ uses light to cook your food better, easier, and faster than ever",
            "description": "The ‘Tesla of Ovens’ uses light to cook your food better, easier, and faster than everGod created light. Brava perfected the art of cooking with it. Meet Brava, an oven that harnesses the power of pure light to cook food...",
            "url": "https://www.yankodesign.com/2023/03/18/the-tesla-of-ovens-uses-light-to-cook-your-food-better-easier-and-faster-than-ever/",
            "urlToImage": "https://www.yankodesign.com/images/design_news/2023/03/this_smart_oven_uses_light_to_cook_your_food_better_faster_easier.jpg",
            "publishedAt": "2023-03-19T01:44:56Z",
            "content": "God created light. Brava perfected the art of cooking with it. Meet Brava, an oven that harnesses the power of pure light to cook food to perfection. Unlike radiant heat, which heats the entire oven … [+4812 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Jason Lemon",
            "title": "Trump's Rivals Outraged by Possible New York Indictment",
            "description": "The former president said on Saturday that he may be criminally charged on Tuesday.",
            "url": "https://www.newsweek.com/trumps-rivals-outraged-possible-new-york-indictment-1788730",
            "urlToImage": "https://d.newsweek.com/en/full/2210955/ramaswamy-trump-pence.png",
            "publishedAt": "2023-03-19T01:06:19Z",
            "content": "As former President Donald Trump may be on the verge of indictment in New York, some of his political rivals are preemptively criticizing what would be an unprecedented decision—describing it as \"per… [+5939 chars]"
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Steve Mollman",
            "title": "OpenAI CEO Sam Altman warns that other A.I. developers working on ChatGPT-like tools won’t put on safety limits—and the clock is ticking",
            "description": "Society \"has a limited amount of time to figure out how to react to that,\" Altman warned in a new interview.",
            "url": "https://fortune.com/2023/03/18/openai-ceo-sam-altman-warns-that-other-ai-developers-working-on-chatgpt-like-tools-wont-put-on-safety-limits-and-clock-is-ticking/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/03/GettyImages-1247428492-3-e1679184154946.jpg?resize=1200,600",
            "publishedAt": "2023-03-19T00:13:21Z",
            "content": "OpenAI CEO Sam Altman believes artificial intelligence has incredible upside for society, but he also worries about how bad actors will use the technology. In an ABC Newsinterview this week, he warne… [+3584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Steve Mollman",
            "title": "OpenAI CEO Sam Altman warns that other A.I. developers working on ChatGPT-like tools won’t put on safety limits—and the clock is ticking",
            "description": "Society \"has a limited amount of time to figure out how to react to that,\" Altman warned in a new interview.",
            "url": "https://finance.yahoo.com/news/openai-ceo-sam-altman-warns-001321728.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pcTkkqcd5U4CCOxBWFJb9g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/fortune_175/405a44ffe6c52fe4e48ee01ec8840aff",
            "publishedAt": "2023-03-19T00:13:21Z",
            "content": "OpenAI CEO Sam Altman believes artificial intelligence has incredible upside for society, but he also worries about how bad actors will use the technology.\r\nMore from Fortune: \r\nIn an ABC News interv… [+3715 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Jason Lemon",
            "title": "Steve Bannon Predicts What Will Happen If Trump's Indicted",
            "description": "The former president said that he expects to be criminally charged on Tuesday, urging his supporters to protest.",
            "url": "https://www.newsweek.com/steve-bannon-predicts-what-will-happen-if-trumps-indicted-1788726",
            "urlToImage": "https://d.newsweek.com/en/full/2210949/steve-bannon-donald-trump.png",
            "publishedAt": "2023-03-18T22:37:08Z",
            "content": "Right-wing podcaster and political strategist Steve Bannon on Saturday predicted what will happen if former President Donald Trump faces indictment, as is widely expected, in New York next week.\r\nPos… [+4054 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Neil Rozenbaum)",
            "title": "Tesla Continues to Dominate and It's Not Even Close",
            "description": "Here's everything you need to know about the EV maker's week.",
            "url": "https://www.fool.com/investing/2023/03/18/tesla-continues-to-dominate-and-its-not-even-close/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/725153/tsla.png",
            "publishedAt": "2023-03-18T22:32:46Z",
            "content": "In this week's video, I cover everything you need to know about news related to Tesla(TSLA -2.17%) during the week of March 13. Today's video will focus on Tesla's continued domination in Europe and … [+215 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Futurism"
            },
            "author": "Noor Al-Sibai",
            "title": "Oh, Great, Elon Musk Has Entered the Trans Kids \"Debate\" Chat",
            "description": "Elon Musk has offered a take that nobody asked for on the bad-faith \"debate\" regarding transgender children and their access to medical care — though of course, it's not the first time the Twitter owner has waded into trans reactionary rhetoric. Responding, f…",
            "url": "https://futurism.com/neoscope/elon-musk-trans-debate",
            "urlToImage": "https://wp-assets.futurism.com/2023/03/elongoaway.jpg",
            "publishedAt": "2023-03-18T21:00:26Z",
            "content": "Image byNurPhoto via Getty / Futurism\r\nElon Musk just offered a take nobody asked for, on the bad-faith \"debate\" regarding transgender children and access to medical care though of course, it's not t… [+3185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Screen Rant"
            },
            "author": "Michael Akuchie",
            "title": "7 Great EVs That Get More Than 300 Miles On A Charge",
            "description": "When shopping for an electric vehicle, the range should be considered. Here are the 7 best 300+ mile EVs including products from Tesla and Lucid.",
            "url": "https://screenrant.com/best-evs-300-mile-range/",
            "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/lucid-air-grand-touring-ev.jpg",
            "publishedAt": "2023-03-18T21:00:17Z",
            "content": "With more automakers taking a stab at electric vehicle production, there are now many more options topping 300 miles of range. When it comes to choosing an EV based on range, drivers should prioritiz… [+5450 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Fahad Saleem",
            "title": "15 Most Promising Long-Term Stocks According to Analysts",
            "description": "In this article, we will take a look at the 15 most promising long-term stocks according to analysts. To see more such companies, go directly to 5 Most...",
            "url": "https://finance.yahoo.com/news/15-most-promising-long-term-205004653.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZnouO6SYVp7rmqgEzX9X7g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/insidermonkey.com/d42b3f86d4df4fc661c1ab873312fc9b",
            "publishedAt": "2023-03-18T20:50:04Z",
            "content": "In this article, we will take a look at the 15 most promising long-term stocks according to analysts. To see more such companies, go directly to 5 Most Promising Long-Term Stocks According to Analyst… [+14489 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "Donald Trump returns to Facebook",
            "description": "The former US president comes back to the platform after a two-year suspension Read Full Article at RT.com",
            "url": "https://www.rt.com/news/573205-donald-trump-facebook-return/",
            "urlToImage": "https://mf.b37mrtl.ru/files/2023.03/article/6416093385f540475b7ebc41.jpg",
            "publishedAt": "2023-03-18T19:41:11Z",
            "content": "Former US president Donald Trump returned to Facebook on Friday, writing “I’M BACK!” on his reinstated page. He was banned from the social network in 2021 following the January 6 Capitol riots in Was… [+2694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Screen Rant"
            },
            "author": "Arthur Goyaz",
            "title": "David Bowie’s The Prestige Role Explained",
            "description": "David Bowie was an iconic music artist who also played many memorable characters in movies, including Christopher Nolan's The Prestige.",
            "url": "https://screenrant.com/prestige-david-bowie-character-nikola-tesla/",
            "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/feature-image-david-bowie-s-the-prestige-role.jpg",
            "publishedAt": "2023-03-18T19:31:15Z",
            "content": "David Bowie plays a fictionalized version of a real-life character in Christopher Nolan's The Prestige, a movie set in an imagined illusionist scene in the 1890s. Bowie is best remembered for his gro… [+3103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Cointelegraph By Editorial Staff",
            "title": "SBF legal fees, BTC market cap flips Meta and USDC climbs back to $1: Hodler’s Digest, March 12-18",
            "description": "Sam Bankman-Fried seeks to use FTX’s corporate insurance, Bitcoin outperforming Wall Street banks in 2023 and USDC repegs after turbulent days.",
            "url": "https://cointelegraph.com/magazine/sbf-legal-fees-btc-marketcap-flips-meta-usdc-climbs-back-to-1-hodlers-digest-march-12-18/",
            "urlToImage": "https://cointelegraph.com/magazine/wp-content/uploads/2023/03/march-18-scaled.jpg",
            "publishedAt": "2023-03-18T19:14:56Z",
            "content": "Top Stories This Week\r\nSam Bankman-Fried petitions court to prioritize reimbursing his legal fees\r\nSam Bankman-Fried (SBF) is seeking to use FTX’s corporate insurance policies to cover his legal expe… [+8238 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Reviewgeek.com"
            },
            "author": "Cory Gunther",
            "title": "7-Eleven Will Charge Your EV While You Guzzle a Slurpee",
            "description": "In the future, when you stop for a Big Gulp fountain drink or slurpee at 7-Eleven, there’s a good chance you’ll find a spot to recharge your electric vehicle. The famous convenience store is launching 7Charge, a massive new EV fast-charging network.",
            "url": "https://www.reviewgeek.com/148545/7-eleven-will-charge-your-ev-while-you-guzzle-a-slurpee/",
            "urlToImage": "https://www.reviewgeek.com/p/uploads/2023/03/5de210a9.jpg",
            "publishedAt": "2023-03-18T19:00:40Z",
            "content": "7-Eleven\r\nIn the future, when you stop for a Big Gulp fountain drink or slurpee at 7-Eleven, there’s a good chance you’ll find a spot to recharge your electric vehicle. The famous convenience store i… [+1679 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Robert Kraychik, Robert Kraychik",
            "title": "Elon Musk: 'Trump Will Be Re-Elected in a Landslide Victory' if Arrested",
            "description": "Former President Donald Trump will win reelection in a \"landslide victory\" if he is handcuffed and arrested next week, Twitter CEO Elon Musk predicted.",
            "url": "https://www.breitbart.com/2024-election/2023/03/18/elon-musk-trump-will-be-re-elected-landslide-victory-if-arrested/",
            "urlToImage": "https://media.breitbart.com/media/2022/11/elon-musk-reinstates-Trump-twitter-logo-Dimitrios-Kambouris_Getty-Images-BNN-Edit-640x335.png",
            "publishedAt": "2023-03-18T18:21:22Z",
            "content": "Former President Donald Trump will win reelection in a “landslide victory” if he is handcuffed and arrested next week, Elon Musk, CEO of SpaceX, Tesla, and Twitter predicted in a tweet published Satu… [+1368 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Matthew Lynn",
            "title": "Stubborn Germany is weakening Europe’s most powerful economy",
            "description": "It was one of the great German inventions. It was the foundation of the country’s economic success. And it still accounts for more than a million jobs...",
            "url": "https://finance.yahoo.com/news/stubborn-germany-weakening-europe-most-180000083.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.5vaqicS27VMusUsHdaghw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTI-/https://media.zenfs.com/en/the_telegraph_258/946ddcc9b8b29cf4201048950ce7e9e3",
            "publishedAt": "2023-03-18T18:00:00Z",
            "content": "A worker wearing a protective face mask secures a suspension unit to an automobile chassis on the production line at the BMW South Africa Pty Ltd. Rosslyn plant in Midrand, South Africa, on Friday, M… [+6000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Your EDM"
            },
            "author": "Matthew Meadow",
            "title": "Flux Pavilion joins a “new age of dubstep” and releases newest single, ‘Paradise’",
            "description": "When I first started really digging into dubstep around 2010, one of the first songs that I found was “Lines In Wax” by Flux Pavilion. Even before “I Can’t Stop” or his iconic “Gold Dust” remix with Doctor P, I fell in love with the flow from Foreign Beggars,…",
            "url": "https://www.youredm.com/2023/03/18/flux-pavilion-joins-a-new-age-of-dubstep-and-releases-newest-single-paradise/",
            "urlToImage": "https://www.youredm.com/wp-content/uploads/2021/01/Flux-Pavilion-Press-Shot-1-2020-Fiona-Garden-1-scaled.jpg",
            "publishedAt": "2023-03-18T17:26:55Z",
            "content": "When I first started really digging into dubstep around 2010, one of the first songs that I found was “Lines In Wax” by Flux Pavilion. Even before “I Can’t Stop” or his iconic “Gold Dust” remix with … [+1597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Teresa Rivas",
            "title": "How Big Tech Became the New Defensive Stock Play",
            "description": "Crises make strange bedfellows. Just look at the new class of defensive stocks: utilities, consumer staples, healthcare—and Big Tech.",
            "url": "https://www.barrons.com/articles/big-tech-new-defensive-stocks-5ef14a87",
            "urlToImage": "https://images.barrons.com/im-707279/social",
            "publishedAt": "2023-03-18T16:40:20Z",
            "content": "Crises make strange bedfellows. Just look at the new class of defensive stocks: utilities, consumer staples, healthcareand Big Tech.In reality, though, technology did the heavy lifting. Given sector … [+3184 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "bitcoin.com",
            "title": "Elon Musk Criticizes Federal Reserve’s Data Latency and Calls for Immediate Rate Drop Amidst Banking Chaos",
            "description": "Amidst the chaos in the U.S. banking sector, Elon Musk, the CEO of Tesla and owner of Twitter, has been critical of the country’s central bank. Musk insists that the U.S. Federal Reserve is operating with “way too much latency in their data,” and he insists t…",
            "url": "https://biztoc.com/x/350108cf6d409965",
            "urlToImage": "https://c.biztoc.com/p/350108cf6d409965/og.webp",
            "publishedAt": "2023-03-18T16:40:07Z",
            "content": "Amidst the chaos in the U.S. banking sector, Elon Musk, the CEO of Tesla and owner of Twitter, has been critical of the countrys central bank. Musk insists that the U.S. Federal Reserve is operating … [+320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Caller"
            },
            "author": "Former Rep. Tim Huelskamp",
            "title": "FORMER REP. TIM HUELSKAMP: Have Automakers Opened Your Car Door To Big Tech Surveillance?",
            "description": "The last thing we should do is give Big Tech the keys to our cars.",
            "url": "https://dailycaller.com/2023/03/18/former-rep-tim-huelskamp-have-automakers-opened-your-car-door-to-big-tech-surveillance/",
            "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2021/07/GettyImages-1230189248-scaled-e1625231169999.jpg",
            "publishedAt": "2023-03-18T16:38:59Z",
            "content": "In Greek mythology, the Hydra was a nine-headed snake-like monster that would grow two heads every time one was severed. I am reminded of Hydra every time well-intentioned government officials attemp… [+5031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "tradingview.com",
            "title": "Shiba Inu Drama Heats Up as YouTuber BitBoy Threatens to Reveal Shytoshi Kusama’s Identity",
            "description": "The Shiba Inu community is abuzz with speculation as YouTuber Ben Armstrong threatens to reveal the identity of the lead developer of meme coin Shiba Inu. In a tweet posted earlier today, BitBoy hinted that he will \"dox the founder\" of the popular cryptocurre…",
            "url": "https://biztoc.com/x/5fdbaaec8b1786df",
            "urlToImage": "https://c.biztoc.com/p/5fdbaaec8b1786df/og.webp",
            "publishedAt": "2023-03-18T16:34:08Z",
            "content": "The Shiba Inu community is abuzz with speculation as YouTuber Ben Armstrong threatens to reveal the identity of the lead developer of meme coin Shiba Inu.In a tweet posted earlier today, BitBoy hinte… [+307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Barbara Kollmeyer",
            "title": "The Tell: Despite market volatility, retail investors went on a buy-the-dip spree. These are the stocks they picked up, says Vanda.",
            "description": "Churning financial markets, as the failure of three U.S. banks and uncertainty over one big European one continues to play out, did not stop some investors from buying that so-called dip in the stock market at one point last week.",
            "url": "https://www.marketwatch.com/story/despite-market-volatility-retail-investors-went-on-a-buy-the-dip-spree-these-are-the-stocks-they-picked-up-says-vanda-c58d0279",
            "urlToImage": "https://images.mktw.net/im-745801/social",
            "publishedAt": "2023-03-18T16:24:32Z",
            "content": "Churning financial markets, as the failure of three U.S. banks and uncertainty over one big European one continues to play out, did not stop some investors from buying that so-called dip in the stock… [+5923 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Fahad Saleem",
            "title": "11 Most Undervalued EV Stocks To Buy According To Hedge Funds",
            "description": "In this article, we will take a look at the 11 most undervalued EV stocks to buy according to hedge funds. To see more such companies, go directly to 5 Most ...",
            "url": "https://finance.yahoo.com/news/11-most-undervalued-ev-stocks-161341098.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tuT2F38XCe.D_s3_k9AYAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/insidermonkey.com/98cfe51d6f0c80cb86783a816562aa20",
            "publishedAt": "2023-03-18T16:13:41Z",
            "content": "In this article, we will take a look at the 11 most undervalued EV stocks to buy according to hedge funds. To see more such companies, go directly to 5 Most Undervalued EV Stocks To Buy According To … [+10759 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SlashGear"
            },
            "author": "staff@slashgear.com (Alvin Reyes)",
            "title": "Polestar 2: How To Reboot Center Display",
            "description": "The Polestar 2 is filled to the brim with advanced tech, which means sometimes there&amp;#39;s glitches. However, there is a way to reset first if you&amp;#39;re having issues.",
            "url": "https://www.slashgear.com/1229032/polestar-2-how-to-reboot-center-display/",
            "urlToImage": "https://www.slashgear.com/img/gallery/polestar-2-how-to-reboot-center-display/l-intro-1678907903.jpg",
            "publishedAt": "2023-03-18T16:00:46Z",
            "content": "The Polestar 2 EV is a worthy Tesla Model 3 rival in any configuration. It's available in a single or dual-motor variant, with a 78 kWh battery promising 260-270 miles of driving range. In addition, … [+877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Superpunch.net"
            },
            "author": "noreply@blogger.com (John)",
            "title": "Today's news and jokes",
            "description": "SOMETHING MAJOR is happening. WHAT AREN'T THEY TELLING US about the cardinal directions https://t.co/S6YndI7dyR\r\n— Dan Kois (@dankois) March 14, 2023 you’re wrong and bad at research. I only attended a charter for high school. My public elementary school was …",
            "url": "https://www.superpunch.net/2023/03/todays-news-and-jokes.html",
            "urlToImage": null,
            "publishedAt": "2023-03-18T16:00:00Z",
            "content": "SOMETHING MAJOR is happening. WHAT AREN'T THEY TELLING US about the cardinal directions https://t.co/S6YndI7dyR\r\n— Dan Kois (@dankois) March 14, 2023\r\nyou’re wrong and bad at research. I only attende… [+2040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "newsweek.com",
            "title": "Trump's Facebook return could spell disaster for Truth Social",
            "description": "Donald Trump has returned to Facebook and YouTube and is extending his campaign for the 2024 GOP presidential election. • This could be bad news for his own social media platform, Truth Social. • Trump may choose to use other social media sites, like Twitter,…",
            "url": "https://biztoc.com/x/cc9a80292b9d7f92",
            "urlToImage": "https://c.biztoc.com/p/cc9a80292b9d7f92/og.webp",
            "publishedAt": "2023-03-18T15:02:06Z",
            "content": "Donald Trump has returned to Facebook and YouTube and is extending his campaign for the 2024 GOP presidential election.This could be bad news for his own social media platform, Truth Social.Trump may… [+293 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Darragh Roche",
            "title": "Trump's Facebook Return Could Spell Disaster for Truth Social",
            "description": "The former president has not returned to Twitter despite frequently making use of the site before his ban in 2021.",
            "url": "https://www.newsweek.com/trump-facebook-return-could-spell-disaster-truth-social-1788699",
            "urlToImage": "https://d.newsweek.com/en/full/2210918/donald-trump-speaks-media.jpg",
            "publishedAt": "2023-03-18T15:01:24Z",
            "content": "<ul><li>Donald Trump has returned to Facebook and YouTube and is extending his campaign for the 2024 GOP presidential election.</li><li>This could be bad news for his own social media platform, Truth… [+6172 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Business Today Desk",
            "title": "Photo of Elon Musk with son X AE A-XII goes viral; here's how Twitter reacted",
            "description": "In the photo posted by Elon Musk on Twitter, Musk is seen holding little X in his arms",
            "url": "https://www.businesstoday.in/latest/trends/story/photo-of-elon-musk-with-son-x-ae-a-xii-goes-viral-heres-how-twitter-reacted-373950-2023-03-18",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/elon_musk-sixteen_nine.jpg",
            "publishedAt": "2023-03-18T14:53:08Z",
            "content": "Tesla CEO Elon Musk shared a picture collage with his son X Ã A-XII and it has gone viral on social media. \r\nIn the photo posted by Elon Musk on Twitter, Musk is seen holding little X in his arms, pl… [+1193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wired.co.uk"
            },
            "author": "Alistair Charlton",
            "title": "Qualcomm Is Poised to Dominate EVs Before Apple Gets a Chance",
            "description": "Its digital chassis is an internet-connected platform for the whole car, and the tech giant has General Motors, Jeep, Mercedes, and many more on board.",
            "url": "https://www.wired.co.uk/article/electric-cars-qualcomm-apple",
            "urlToImage": "https://media.wired.co.uk/photos/6414b4bc387d767f3b21f52e/16:9/w_1280,c_limit/Qualcomm-Could-Corner-the-EV-Market-Before-Apple-Gets-a-Look-in--Gear.jpg",
            "publishedAt": "2023-03-18T14:00:00Z",
            "content": "Fisker said in 2021 that Foxconn will help with product development, sourcing, and manufacturing, and that the partnership will enable his company to deliver products at a price point that truly open… [+3183 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Alistair Charlton",
            "title": "Qualcomm Is Poised to Dominate EVs Before Apple Gets a Chance",
            "description": "Its digital chassis is an internet-connected platform for the whole car, and the tech giant has General Motors, Jeep, Mercedes, and many more on board.",
            "url": "https://www.wired.com/story/electric-cars-qualcomm-apple/",
            "urlToImage": "https://media.wired.com/photos/6414db30b19ad4e3186e05f5/191:100/w_1280,c_limit/Qualcomm-Could-Corner-the-EV-Market-Before-Apple-Gets-a-Look-in--Gear.jpg",
            "publishedAt": "2023-03-18T14:00:00Z",
            "content": "Perhaps crucially, Qualcomm also says its Digital Chassis allows automakers to own the in-vehicle experience [and] extend their brand and bring engaging consumer interactions into the vehicle. This w… [+3536 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "James Bickerton",
            "title": "Donald Trump's Protest Call to Arms Sparks Jan. 6 Comparisons",
            "description": "Hundreds of Trump supporters broke into Congress on January 6 2021, in a bid to stop the 2020 presidential election result being certified.",
            "url": "https://www.newsweek.com/donald-trumps-protest-call-arms-sparks-jan-6-comparisons-1788702",
            "urlToImage": "https://d.newsweek.com/en/full/2210915/donald-trump-january-6-combined-image.jpg",
            "publishedAt": "2023-03-18T13:48:19Z",
            "content": "Donald Trump's call for Americans to \"protest\", after claiming he will be \"arrested on Tuesday\", has sparked an angry reaction online, with commentators comparing it to the rhetoric used ahead of the… [+7209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thegatewaypundit.com"
            },
            "author": "Anthony Scott",
            "title": "Elon Musk: “Trump Will Be Re-elected in a Landslide Victory” If Arrested",
            "description": "The post Elon Musk: “Trump Will Be Re-elected in a Landslide Victory” If Arrested appeared first on The Gateway Pundit.",
            "url": "https://www.thegatewaypundit.com/2023/03/elon-musk-trump-will-be-re-elected-in-a-landslide-victory-if-arrested/",
            "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/Elon-Musk-5-1200x630.jpg",
            "publishedAt": "2023-03-18T13:45:35Z",
            "content": "As The Gateway Pundit reported earlier on Saturday, President Trump is expecting to be arrested on Tuesday of next week in relation to the Stormy Daniels case where he is being accused of paying Dani… [+1814 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Opening Day: China's Intchains, ICZOOM make U.S. debut",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3682187/ICG;IZM;DIST;HARD;HXHX;RPET;GELYF;NIO;TSLA-Opening-Day-Chinas-Intchains-ICZOOM-make-US-debut",
            "urlToImage": "https://image.thefly.com/catalog/201906/img_534.jpg",
            "publishedAt": "2023-03-18T13:29:28Z",
            "content": "Shares of China's ICZOOM fell as much as 19% in their first trading day after opening flat on Wednesday in another slow IPO week. Chinese chip designer Intchains Group also made its debut earlier thi… [+6364 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla Eyes Giga Berlin Production Boost, GM's Barra Bats For Robotaxi Legislation, Rivian Loses Key Executive And More: Biggest EV Stories Of The Week",
            "description": "Shares of electric vehicle makers swayed to the tune of the broader market sentiment, although some reacted to company-specific catalysts. EV leader Tesla, Inc. TSLA returned to winning ways, with the stock hitting $180 once again. Here are several key events…",
            "url": "https://biztoc.com/x/e46f8bc5b8e7055d",
            "urlToImage": "https://c.biztoc.com/p/e46f8bc5b8e7055d/og.webp",
            "publishedAt": "2023-03-18T13:28:05Z",
            "content": "Shares of electric vehicle makers swayed to the tune of the broader market sentiment, although some reacted to company-specific catalysts. EV leader Tesla, Inc. TSLA returned to winning ways, with th… [+330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Reviewgeek.com"
            },
            "author": "Cory Gunther",
            "title": "Why EVs Still Have a 12V Battery",
            "description": "Your fancy new electric vehicle or PHEV (plug-in hybrid electric vehicle) runs on massive lithium-ion battery packs and electric motors. However, if you look around, you’ll still find your typical 12V car battery or a lead-acid battery.",
            "url": "https://www.reviewgeek.com/146674/why-evs-still-have-a-12v-battery/",
            "urlToImage": "https://www.reviewgeek.com/p/uploads/2023/03/2304ec62.jpg",
            "publishedAt": "2023-03-18T13:00:29Z",
            "content": "Zeljko Radojko/Shutterstock.com\r\nWhile electric cars have huge lithium-ion battery packs to turn the wheels, a regular 12V lead-acid battery handles everything else. At least for now.\r\nYour fancy new… [+5408 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "forbes.com",
            "title": "Current Climate: Breeding A Better Tomato Faster, Plus: How GM & VW Are Beating Tesla",
            "description": "This week’s Current Climate, which every Saturday brings you the latest news about the business of sustainability. Sign up to get it in your inbox every week. ince 2020, California-based Sound Agriculture has been selling its crop additive called Source, whic…",
            "url": "https://biztoc.com/x/883b05aaf944e2c3",
            "urlToImage": "https://c.biztoc.com/p/883b05aaf944e2c3/og.webp",
            "publishedAt": "2023-03-18T12:52:05Z",
            "content": "This weeks Current Climate, which every Saturday brings you the latest news about the business of sustainability. Sign up to get it in your inbox every week.ince 2020, California-based Sound Agricult… [+309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Emma James",
            "title": "Elon Musk says Trump will win by LANDSLIDE in 2024 if arrested",
            "description": "Trump claims that he will be arrested by the Manhattan DA's office  - with Musk saying it would mean a 'landslide victory' for the former presidents re-election campaign.",
            "url": "https://www.dailymail.co.uk/news/article-11875521/Elon-Musk-says-Trump-win-LANDSLIDE-2024-Manhattan-DA-arrests-Tuesday.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/18/12/68849515-0-image-a-21_1679143563883.jpg",
            "publishedAt": "2023-03-18T12:47:46Z",
            "content": "Tesla CEO Elon Musk has backed former president Donald Trump for a 'landslide victory' if he is handcuffed and arrested by the Manhattan DA on Tuesday.\r\nTrump claims he will be arrested on Tuesday ov… [+2836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Brad Smith",
            "title": "At SXSW 2023, dealmaking carries on against banking crisis backdrop",
            "description": "The vibe at the annual SXSW festival turned weird as a banking crisis unfolded. But weird is on par for Austin, Texas — so the show goes on.",
            "url": "https://finance.yahoo.com/news/sxsw-2023-dealmaking-banking-crisis-backdrop-122323216.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/K023THHe4Hi5x85BogGc8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-03/08362b00-c4f6-11ed-bd4f-84fb61d4dd83",
            "publishedAt": "2023-03-18T12:23:23Z",
            "content": "AUSTIN, Texas The annual South by Southwest (SXSW) 10-day event in Austin, Texas, runs rampant with free drink tickets, celebrity sightings, parties with strobe lights, and live music performances, w… [+5404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Alex Knapp, Forbes Staff, \n Alex Knapp, Forbes Staff\n https://www.forbes.com/sites/alexknapp/",
            "title": "Current Climate: Breeding A Better Tomato Faster, Plus: How GM & VW Are Beating Tesla",
            "description": "This week’s Current Climate, which every Saturday brings you the latest news about the business of sustainability.",
            "url": "https://www.forbes.com/sites/alanohnsman/2023/03/18/current-climate-breeding-a-better-tomato-faster-plus-how-gm--vw-are-beating-tesla/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/640ff382a8cad54222216405/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-03-18T12:00:00Z",
            "content": "This weeks Current Climate, which every Saturday brings you the latest news about the business of sustainability. Sign up to get it in your inbox every week.\r\nSound Agriculture\r\nSince 2020, Californi… [+4793 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "TikTok's potential buyers",
            "description": "Dude, where's my car? Parked where it usually is, I hope. But that isn't the case for a lot of people. That's because a viral TikTok has been showing people how to easily hijack Kia and Hyundai vehicles using only a USB cord. And it isn't just TikTok thieves …",
            "url": "https://biztoc.com/x/d240d380ab06167b",
            "urlToImage": "https://c.biztoc.com/p/d240d380ab06167b/og.webp",
            "publishedAt": "2023-03-18T11:42:05Z",
            "content": "Dude, where's my car? Parked where it usually is, I hope. But that isn't the case for a lot of people. That's because a viral TikTok has been showing people how to easily hijack Kia and Hyundai vehic… [+312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vox"
            },
            "author": "Umair Irfan",
            "title": "Why is it so hard to charge electric vehicles on the road?",
            "description": "Electric car owners are finding out how hard it can be to charge EVs at public charging stations.",
            "url": "https://www.vox.com/climate/23589785/ev-dc-fast-charging-station-battery-electric-tesla-rivian",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/zVH_L7DC1Ux9TixOVh0Std53P1w=/0x167:6000x3308/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24515997/GettyImages_1246122398.jpeg",
            "publishedAt": "2023-03-18T11:30:00Z",
            "content": "The US is struggling to deploy fast-charging stations as electric cars grow more popular. | Julian Stratenschulte/Picture Alliance via Getty Images\r\n\n \n\n Electric car owners are finding out how hard … [+18166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Travis Hoium)",
            "title": "How You Can Invest in Cruise (the Autonomous Driving Company)",
            "description": "This is a clear leader in autonomous driving with a lot of growth potential.",
            "url": "https://www.fool.com/investing/2023/03/18/how-you-can-invest-in-cruise-the-autonomous-drivin/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/725085/how-to-buy-cruise.png",
            "publishedAt": "2023-03-18T11:15:00Z",
            "content": "Suzanne Frey, an executive at Alphabet, is a member of The Motley Fool's board of directors. John Mackey, former CEO of Whole Foods Market, an Amazon subsidiary, is a member of The Motley Fool's boar… [+686 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "observer.com",
            "title": "Elon Musk Hints at an April 20 Starship Launch, Another Nod at His Love of Weed",
            "description": "The repeatedly rescheduled maiden orbital flight of Starship, a SpaceX rocket designed to fly humans to Mars one day, just got a new date. SpaceX CEO Elon Musk is now targeting late April, and hinted his preference would be April 20, to launch the historic mi…",
            "url": "https://biztoc.com/x/b45f0ad531bf6cb2",
            "urlToImage": "https://c.biztoc.com/p/b45f0ad531bf6cb2/og.webp",
            "publishedAt": "2023-03-18T11:14:40Z",
            "content": "The repeatedly rescheduled maiden orbital flight of Starship, a SpaceX rocket designed to fly humans to Mars one day, just got a new date. SpaceX CEO Elon Musk is now targeting late April, and hinted… [+257 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hbullock@insider.com (Hallam Bullock)",
            "title": "TikTok's potential buyers",
            "description": "In today's edition of 10 Things in Tech: The list of companies that could buy TikTok, fasting like Elon Musk, Meta's job cuts, and SVB's meltdown.",
            "url": "https://www.businessinsider.com/tiktok-potential-buyers-svb-elon-musk-chatgpt-meta-peter-thiel-2023-3",
            "urlToImage": "https://i.insider.com/6414a4975f4f5400191a1f2a?width=1200&format=jpeg",
            "publishedAt": "2023-03-18T11:11:00Z",
            "content": "Dude, where's my car? Parked where it usually is, I hope. But that isn't the case for a lot of people. \r\nThat's because a viral TikTok has been showing people how to easily hijack Kia and Hyundai veh… [+4290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Insider",
            "title": "Twitter employees called a Tesla executive 'the Elon whisperer' because he could read Musk's mood",
            "description": "Continue reading Twitter employees called a Tesla executive 'the Elon whisperer' because he could read Musk's mood\nTwitter employees called a Tesla executive 'the Elon whisperer' because he could read Musk's mood originally appeared on Autoblog on Sat, 18 Mar…",
            "url": "https://www.autoblog.com/2023/03/18/twitter-employees-nicknamed-tesla-executive-the-elon-whisperer/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/4f0518706fffb79339d72e2cadfab134",
            "publishedAt": "2023-03-18T11:00:00Z",
            "content": "Omead Afshar joined Twitter last year, according to the Financial Times. \r\n Getty Images\r\nTwitter staffers have reportedly nicknamed a Tesla executive at the company \"the Elon whisperer\" because of h… [+1940 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIYphotography"
            },
            "author": "John Aldred",
            "title": "Slowing down everyday activities to make one second last for one hour",
            "description": "The Slow Mo Guys are back again, slowing down time. This time, it’s part 2 of something the boys did in 2021. Shooting at 90,000 frames per second and playing back at 25fps, they’re able to slow down time to 1/3,600th of its regular speed. This means that one…",
            "url": "https://www.diyphotography.net/slowing-down-everyday-activities-to-make-one-second-last-for-one-hour/",
            "urlToImage": "https://www.diyphotography.net/wp-content/uploads/2023/03/if-every-second-lasted-an-hour.jpg",
            "publishedAt": "2023-03-18T10:11:03Z",
            "content": "The Slow Mo Guys are back again, slowing down time. This time, its part 2 of something the boys did in 2021. Shooting at 90,000 frames per second and playing back at 25fps, theyre able to slow down t… [+1841 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
            "title": "McLaren Applied Wants To Lead The Fourth Wave Of Electric Vehicles",
            "description": "Most people agree that some of the joy of driving has been lost on the route to electification. McLaren Applied has technology that can put the fun back in.",
            "url": "https://www.forbes.com/sites/jamesmorris/2023/03/18/mclaren-applied-wants-to-lead-the-fourth-wave-of-electric-vehicles/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6414b2e379a6b1f4f57ffb6c/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-03-18T10:00:00Z",
            "content": "You would need to be very much in denial not to notice that EVs have been taking the automotive market by storm in the last couple of years. Sales grow every month, and the tipping point is fast appr… [+7552 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Trevor Jennewine)",
            "title": "A Bull Market Is Coming: 1 Warren Buffett Index Fund to Buy in 2023 and Hold Forever",
            "description": "Warren Buffett believes the average investor can outperform most professional money managers with this strategy.",
            "url": "https://www.fool.com/investing/2023/03/18/bull-market-is-coming-1-buffett-index-fund-to-buy/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724677/bull-market-2.jpg",
            "publishedAt": "2023-03-18T09:10:00Z",
            "content": "Economic growth slowed last year as high inflation and climbing interest rates weighed on consumer spending. Those headwinds cut into corporate profits and stoked recession fears that brought about a… [+4104 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Camila Domonoske",
            "title": "Why car prices are still so high — and why they are unlikely to fall anytime soon",
            "description": "The average new vehicle costs nearly $49,000, an almost $10,000 increase from before the pandemic. This is a look at today's deeply weird auto market.",
            "url": "https://www.npr.org/2023/03/18/1163278082/car-prices-used-cars-electric-vehicles-pandemic",
            "urlToImage": "https://media.npr.org/assets/img/2023/03/17/gettyimages-1327875226-1-_wide-f61b21401da613dbc437f3fc9f3849c37f6768c7-s1400-c100.jpg",
            "publishedAt": "2023-03-18T09:00:27Z",
            "content": "Brand-new Nissan vehicles sit on a sales lot in Richmond, Calif., on July 9, 2021. Car prices surged during the pandemic, and despite coming down from their peak, they still remain higher than a few … [+7588 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Toronto Star"
            },
            "author": "Navneet Alang - Contributing Columnist",
            "title": "Navneet Alang: Silicon Valley Bank has gone bust. Here’s why some feel the bank had it coming",
            "description": "There may have been panic in the tech sector when the bank folded, writes Navneet Alang, there was something akin to glee elsewhere.",
            "url": "https://www.thestar.com/business/opinion/2023/03/18/silicon-valley-bank-has-gone-bust-cue-the-big-tech-schadenfreude-.html",
            "urlToImage": "https://images.thestar.com/bQ-H_deuFrSfdGTTfvw72aU3Y-A=/1200x799/smart/filters:cb(1679094527066):format(webp)/https://www.thestar.com/content/dam/thestar/business/opinion/2023/03/18/silicon-valley-bank-has-gone-bust-cue-the-big-tech-schadenfreude-/silicon_valley_bank_2_.jpg",
            "publishedAt": "2023-03-18T09:00:00Z",
            "content": "It was, in the end, a very short-lived banking crisis.\r\nThere was panic last week when clients, fearful for its liquidity, pulled billions out of Silicon Valley Bank. The $200B institution promptly f… [+5332 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "seekingalpha.com",
            "title": "Rivian: Got Caught In A Perfect Storm (NASDAQ:RIVN)",
            "description": "Rivian Automotive, Inc. (NASDAQ:RIVN) has continued to underperform EV leader Tesla (TSLA) since November 2022. While TSLA remains well above (76%) its early January lows, despite the recent pullback, RIVN has dropped to a new low this week. We believe EV inv…",
            "url": "https://biztoc.com/x/164a6963534077a8",
            "urlToImage": "https://c.biztoc.com/p/164a6963534077a8/og.webp",
            "publishedAt": "2023-03-18T08:58:04Z",
            "content": "Rivian Automotive, Inc. (NASDAQ:RIVN) has continued to underperform EV leader Tesla (TSLA) since November 2022. While TSLA remains well above (76%) its early January lows, despite the recent pullback… [+307 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": null,
            "title": "'Gravity eater', 'Quantum hunter': Elon Musk feels these could be job titles in future",
            "description": "Elon Musk's post attracted millions of views in just one hour of posting. He posted an image titled ‘Jobs in the future’ but the title of the sixth image was missing.",
            "url": "https://economictimes.indiatimes.com/news/new-updates/gravity-eater-quantum-hunter-elon-musk-feels-these-could-be-job-titles-in-future/articleshow/98752174.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98752802,width-1070,height-580,imgsize-764521,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-03-18T08:57:36Z",
            "content": "\"Gravity eater\", \"Quantum hunter\", \"Glitch dreamer\", \"Void deer\" and \"Boson cutter\" are some of the job titles that will exist in the future, predicts Elon Musk . His Twitter post has been viewed ove… [+1632 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Nikhil Agarwal",
            "title": "Vijay Kedia picks another 7% stake in smallcap auto stock",
            "description": "According to disclosures made to stock exchanges, Kedia acquired 16,83,502 shares of the company on March 15. Before the acquisition, he held a 1.5% stake and his total shareholding in the auto company has gone up to 8.43%.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/vijay-kedia-picks-another-7-stake-in-smallcap-auto-stock/articleshow/98751954.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98751996,width-1070,height-580,imgsize-682386,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-03-18T08:10:59Z",
            "content": "NEW DELHI: Mumbai's star investor Vijay Kedia has picked up another 7.05% stake in smallcap Atul Auto by converting warrants into equity shares.According to disclosures made to stock exchanges, Kedia… [+1579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Alex Wood, Forbes Staff, \n Alex Wood, Forbes Staff\n https://www.forbes.com/sites/alexwood/",
            "title": "The Memo: Uber Benefits, Saudi Beach Holidays And Tech’s Terrible Week",
            "description": "The Memo is Forbes’ global weekly newsletter curating the latest in future trends, entrepreneurship and sustainability.",
            "url": "https://www.forbes.com/sites/alexwood/2023/03/18/the-memo-uber-benefits-saudi-beach-holidays-and-techs-terrible-week/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64147ad732e4461f7fc324b5/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-03-18T07:30:00Z",
            "content": "As part of its plans to expand tourism, the Saudi government intends to build a mammoth airport in the capital Riyadh over 22 square miles with six runways, including the terminal shown here in an il… [+5156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "This is Money"
            },
            "author": "Rob Hull",
            "title": "The sub-£40,000 electric cars with the longest ranges",
            "description": "We've set a price ceiling of £40,000 for the EVs that can make it into this countdown. This is the 'premium tax' benchmark for Vehicle Excise Duty.",
            "url": "https://www.thisismoney.co.uk/money/electriccars/article-11859209/The-sub-40-000-electric-cars-longest-ranges.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/16/17/68786455-0-image-a-72_1678986047770.jpg",
            "publishedAt": "2023-03-18T07:00:56Z",
            "content": "The term 'affordable' is a relative one. What might be within one person's budget might not be attainable for others. Some will argue - and perhaps rightfully so - that no electric car on sale in Bri… [+10714 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Klaus Ulrich",
            "title": "Is German industry migrating to the US?",
            "description": "The Biden administration is luring companies with big subsidies. What would it mean for Germany as a business location if German companies were to invest more in the US and build new production sites there. German companies love America. According to the Germ…",
            "url": "https://www.dw.com/en/is-german-industry-migrating-to-the-us/a-65031130",
            "urlToImage": "https://static.dw.com/image/65015270_6.jpg",
            "publishedAt": "2023-03-18T06:55:00Z",
            "content": "German companies love America. According to the German-American Chamber of Commerce, around 5,600 of them have invested in the US market. As of September 2022, that's an investment volume of almost $… [+7209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "jalopnik.com",
            "title": "Elon Musk’s Divisive Persona Is Harming Tesla’s Reputation, Data Finds",
            "description": "Just a few years ago, Tesla was the only electric car maker most people would even consider buying. It s impressive range and, at the time, sleek styling made it an easy choice for anyone to cut down their gas bill. Another factor in its meteoric rise was eni…",
            "url": "https://biztoc.com/x/87cd6118ddee8e06",
            "urlToImage": "https://c.biztoc.com/p/87cd6118ddee8e06/og.webp",
            "publishedAt": "2023-03-18T06:04:07Z",
            "content": "Just a few years ago, Tesla was the only electric car maker most people would even consider buying. It s impressive range and, at the time, sleek styling made it an easy choice for anyone to cut down… [+292 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Understanding generative AI, the tech backing OpenAI's ChatGPT",
            "description": "Generative AI can take notes during a virtual meeting.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/understanding-generative-ai-the-tech-backing-openais-chatgpt/articleshow/98749311.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-98749379,width-1070,height-580,imgsize-56994,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-03-18T05:55:17Z",
            "content": "Generative artificial intelligence has become a buzzword this year, capturing the public's fancy and sparking a rush among Microsoft and Alphabet to launch products with technology they believe will … [+3549 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ozbargain.com.au"
            },
            "author": "John Lam",
            "title": "15% off Tesla UMC Adapter and Accessories (UMC 2 Adapter $186, Tesla Screen Protector $36 and More) Delivery @ INCHARGEx",
            "description": "15 Percent Off for the following 4 Tesla accessories @ INCHARGEx.\n\n5 Pin 32 Amp Single Phase Tesla UMC Gen 2 Adapter, give you 7kW charging (gain 50km per hour) - $186\nhttps://inchargex.com.au/products/5-pin-32-amp-single-phase-…\n\nPremium Tempered Glass Matte…",
            "url": "https://www.ozbargain.com.au/node/763367",
            "urlToImage": "https://files.ozbargain.com.au/n/67/763367x.jpg?h=4fd2635f",
            "publishedAt": "2023-03-18T05:32:24Z",
            "content": "15 Percent Off for the following 4 Tesla accessories @ INCHARGEx.\r\n5 Pin 32 Amp Single Phase Tesla UMC Gen 2 Adapter, give you 7kW charging (gain 50km per hour) - $186https://inchargex.com.au/product… [+670 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "azcoinnews.com",
            "title": "Elon Musk Criticizes US Financial Authorities' Handling of Banking Crisis",
            "description": "Elon Musk, the CEO of Tesla and SpaceX, has once again criticized the US financial authorities, this time for their handling of the recent banking crisis. In a comment on Bill Ackman’s tweet, Musk expressed his disappointment with the measures taken by the au…",
            "url": "https://biztoc.com/x/4366b922856b7f01",
            "urlToImage": "https://c.biztoc.com/p/4366b922856b7f01/og.webp",
            "publishedAt": "2023-03-18T03:32:12Z",
            "content": "Elon Musk, the CEO of Tesla and SpaceX, has once again criticized the US financial authorities, this time for their handling of the recent banking crisis.In a comment on Bill Ackmans tweet, Musk expr… [+269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "techcrunch.com",
            "title": "Meta launches paid verification on Instagram and Facebook in the US",
            "description": "Meta CEO Mark Zuckerberg announced today that the company is rolling out Meta Verified on Instagram and Facebook in the U.S. The subscription service, which first launched in Australia and New Zealand last month, allows users to add the coveted blue check mar…",
            "url": "https://biztoc.com/x/cd02e3038e2d1d9f",
            "urlToImage": "https://c.biztoc.com/p/cd02e3038e2d1d9f/og.webp",
            "publishedAt": "2023-03-18T02:20:07Z",
            "content": "Meta CEO Mark Zuckerberg announced today that the company is rolling out Meta Verified on Instagram and Facebook in the U.S. The subscription service, which first launched in Australia and New Zealan… [+313 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "NOTICE: Investors in Tesla, Inc. with Substantial Losses Have Opportunity to Lead Class Action Lawsuit - TSLA",
            "description": "SAN DIEGO, March 17, 2023 /PRNewswire/ -- The law firm of Robbins Geller Rudman & Dowd LLP announces that purchasers or acquirers of Tesla, Inc. (NASDAQ: TSLA) common stock between February 19, 2019 and February 17, 2023, inclusive (the \"Class Period\") have u…",
            "url": "https://www.prnewswire.com/news-releases/notice-investors-in-tesla-inc-with-substantial-losses-have-opportunity-to-lead-class-action-lawsuit--tsla-301775410.html",
            "urlToImage": "https://mma.prnewswire.com/media/198876/robbins_geller_rudman_and_dowd_llp_logo.jpg?p=facebook",
            "publishedAt": "2023-03-18T02:10:00Z",
            "content": "SAN DIEGO, March 17, 2023 /PRNewswire/ -- The law firm of Robbins Geller Rudman &amp; Dowd LLP announces that purchasers or acquirers of Tesla, Inc. (NASDAQ: TSLA) common stock between February 19, 2… [+6148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "Bragar Eagel & Squire",
            "title": "Bragar Eagel & Squire, P.C. Reminds Investors That Class Action Lawsuits Have Been Filed Against Catalent, Tesla, DLocal, and Cognyte and Encourages Investors to Contact the Firm",
            "description": "NEW YORK, March 17, 2023 (GLOBE NEWSWIRE) -- Bragar Eagel & Squire, P.C., a nationally recognized shareholder rights law firm, reminds investors that class actions have been commenced on behalf of stockholders of Catalent, Inc. (NYSE: CTLT), Tesla, Inc. (NASD…",
            "url": "https://www.globenewswire.com/news-release/2023/03/18/2629787/0/en/Bragar-Eagel-Squire-P-C-Reminds-Investors-That-Class-Action-Lawsuits-Have-Been-Filed-Against-Catalent-Tesla-DLocal-and-Cognyte-and-Encourages-Investors-to-Contact-the-Firm.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/29481954-f2ff-4756-b5a9-d982a6497bd0",
            "publishedAt": "2023-03-18T01:00:00Z",
            "content": "NEW YORK, March 17, 2023 (GLOBE NEWSWIRE) -- Bragar Eagel &amp; Squire, P.C., a nationally recognized shareholder rights law firm, reminds investors that class actions have been commenced on behalf o… [+22952 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "Erin Marquis",
            "title": "Cars With Self-Driving Capabilities Are Watching You",
            "description": "Self-driving cars still don’t exist, despite a decade of research and development from both start-ups and legacy automakers. But Level...\nThe post Cars With Self-Driving Capabilities Are Watching You appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<u…",
            "url": "https://www.gizmodo.com.au/2023/03/cars-with-self-driving-capabilities-are-watching-you/",
            "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/03/17/5e71d3261842978c51e058958517ff65.jpg?quality=80&resize=1280,720",
            "publishedAt": "2023-03-18T00:30:03Z",
            "content": "Self-driving cars still dont exist, despite a decade of research and development from both start-ups and legacy automakers. But Level 2 vehicles with advanced driver-assistance systems similar to sel… [+3399 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "José Pontes",
            "title": "37% Of New Cars Sold In Netherlands Now Plugin Cars",
            "description": "Lynk & Co is the #1 best selling car in the overall Dutch auto market.",
            "url": "https://cleantechnica.com/2023/03/17/37-of-new-cars-sold-in-netherlands-now-plugin-cars/",
            "urlToImage": "http://cleantechnica.com/files/2023/03/Netherlands-EV-Sales-Report-Feb-2023.png",
            "publishedAt": "2023-03-17T23:38:48Z",
            "content": "After a good January, February increased plugin registrations by 59% YoY, to 10,310 units, with the Dutch plugin vehicle (PEV) market reaching 37% last month. Thats mostly thanks to pure electrics (2… [+5257 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool Australia"
            },
            "author": "James Mickleboro",
            "title": "These ETFs could be top options for buy and hold investors",
            "description": "Here's why it could be worth holding these ETFs closely over the long term.\nThe post These ETFs could be top options for buy and hold investors appeared first on The Motley Fool Australia.",
            "url": "https://www.fool.com.au/2023/03/18/these-etfs-could-be-top-options-for-buy-and-hold-investors/",
            "urlToImage": "https://www.fool.com.au/wp-content/uploads/2021/12/excited-couple-16.9-1200x675.jpg",
            "publishedAt": "2023-03-17T23:15:08Z",
            "content": "Sometimes it can be hard to decide which ASX shares to buy. Especially if youre wanting to make long-term buy and hold investments.\r\nThe good news is that exchange traded funds (ETFs) are here to the… [+1584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autocar"
            },
            "author": null,
            "title": "BMW XM",
            "description": "Does only the second-ever bespoke M car leave us excited about the future, or longing for the past?\n\nOne down, one to go. This is the year that two blue-blooded carmakers – Ferrari and BMW M – dispense with tradition and launch their own SUVs.Controversial? J…",
            "url": "https://www.autocar.co.uk/car-review/bmw/xm",
            "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/bmw-xm-2023-001-tracking-front.jpg",
            "publishedAt": "2023-03-17T23:01:45Z",
            "content": "But yeah, all right. We cant stall forever. The fact is that none of the above, fascinating as it is, will get tongues wagging (or, I suspect, orders flowing) anything like as effectively as how the … [+2332 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Associated Press",
            "title": "North Carolina student in good condition after being hit by Tesla",
            "description": "A North Carolina teen who was struck by a Tesla after getting off a school bus is in good condition after sustaining life-threatening injuries. The driver failed to stop for the bus.",
            "url": "https://www.foxnews.com/us/north-carolina-student-good-condition-being-hit-tesla",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_NC_GENERAL.png",
            "publishedAt": "2023-03-17T22:25:34Z",
            "content": "A North Carolina teenager who was struck by a car this week while departing a school bus in Halifax County is now in good condition, a hospital spokesperson said Friday.\r\nTillman Mitchell, a 17-year-… [+1265 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Knowyourmeme.com"
            },
            "author": "Reddit Moments",
            "title": "Starter Packs | d5d.jpg",
            "description": "(1\r\n((\r\nCALVIN KLEIN\r\nDrives\r\nTesla\"\r\n\"I'm\r\ngonna\r\nit soak\"\r\nYETI\r\nm\r\nTIVO\r\nA\r\nس اس |\r\nV\r\nDAWN\r\nvitra\r\nBaby, can you take my\r\nSocks off... Slowly \"\r\nevery dish\r\nlet he's ever\r\nused...\r\nPLATINUM\r\nPOWERWASH\r\nDISH SPRAY\r\nGirls\r\noshua\r\n\"I will die on\r\nthis hill!\"…",
            "url": "https://knowyourmeme.com/photos/2552779-starter-packs",
            "urlToImage": "https://i.kym-cdn.com/photos/images/facebook/002/552/779/d5d.jpg",
            "publishedAt": "2023-03-17T22:23:14Z",
            "content": "PROTIP:\r\nPress the ← and → keys to navigate the gallery,\r\n'g'\r\nto view the gallery, or\r\n'r'\r\nto view a random image."
        },
        {
            "source": {
                "id": null,
                "name": "Theregister.com"
            },
            "author": "Dan Robinson",
            "title": "Alarming: Tesla lawsuit claims collision monitoring system is faulty",
            "description": "Alert noise is 'loud and distracting' for drivers, claims filing\nAll-electric vehicle maker Tesla is facing a potential class action lawsuit over claims that some of its cars suffer from a defect involving false collision alerts that not only inconvenience th…",
            "url": "https://www.theregister.com/2023/03/17/tesla_sued_over_faulty_collision/",
            "urlToImage": "https://regmedia.co.uk/2021/08/18/tesla_shutterstock.jpg",
            "publishedAt": "2023-03-17T22:00:08Z",
            "content": "All-electric vehicle maker Tesla is facing a potential class action lawsuit over claims that some of its cars suffer from a defect involving false collision alerts that not only inconvenience the dri… [+3170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Volkswagen beats Elon Musk's Tesla in revealing a cheap electric car",
            "description": "Elon Musk has been talking about the $25,000 electric car for years. • Volkswagen just beat him to the punch with an EV it expects to sell for 25,000 euros ($26,600). • But the newly unveiled ID. 2all concept car won't ever make its way to the US. For years, …",
            "url": "https://biztoc.com/x/8b2dfbc11bbe42d2",
            "urlToImage": "https://c.biztoc.com/p/8b2dfbc11bbe42d2/og.webp",
            "publishedAt": "2023-03-17T21:58:12Z",
            "content": "Elon Musk has been talking about the $25,000 electric car for years.Volkswagen just beat him to the punch with an EV it expects to sell for 25,000 euros ($26,600).But the newly unveiled ID. 2all conc… [+294 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky.com"
            },
            "author": "James Robinson",
            "title": "'I'm back!': Donald Trump returns to Facebook after two year ban",
            "description": "Donald Trump has returned to Facebook after being banned in the wake of the deadly Capitol riot more than two years ago.",
            "url": "https://news.sky.com/story/donald-trump-returns-to-facebook-after-two-year-ban-as-he-announces-first-rally-of-2024-campaign-12836690",
            "urlToImage": "https://e3.365dm.com/22/12/1600x900/skynews-donald-trump-usa_6001643.jpg?20221219210330",
            "publishedAt": "2023-03-17T21:54:00Z",
            "content": "Donald Trump has returned to Facebook after being banned in the wake of the deadly Capitol riot more than two years ago.\r\nThe former US President wrote \"I'M BACK!\" in a post on his official page on F… [+2638 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Joe Wituschek",
            "title": "7-Eleven is rolling out an EV fast-charging network in North America",
            "description": "If you told me 7-Eleven was going to beat Wawa and Sheetz to a nationwide charging network in the United States and Canada, I would …\nThe post 7-Eleven is rolling out an EV fast-charging network in North America appeared first on BGR.",
            "url": "https://bgr.com/tech/7-eleven-is-rolling-out-an-ev-fast-charging-network-in-north-america/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/03/7-eleven-charging-network.jpg?quality=82&strip=all",
            "publishedAt": "2023-03-17T21:39:00Z",
            "content": "If you told me 7-Eleven was going to beat Wawa and Sheetz to a nationwide charging network in the United States and Canada, I would have said, “Wait…7-Eleven is still around?”\r\nBut that’s what’s happ… [+1791 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "The Rosen Law Firm PA",
            "title": "TSLA NOTICE: ROSEN, NATIONAL TRIAL LAWYERS, Encourages Tesla, Inc. Investors with Losses in Excess of $100K to Secure Counsel Before Important Deadline in Securities Class Action – TSLA",
            "description": "NEW YORK, March 17, 2023 (GLOBE NEWSWIRE) -- WHY: Rosen Law Firm, a global investor rights law firm, reminds purchasers of the securities of Tesla, Inc. (NASDAQ: TSLA) between February 19, 2019 and February 17, 2023, both dates inclusive (the “Class Period”),…",
            "url": "https://www.globenewswire.com/news-release/2023/03/17/2629756/673/en/TSLA-NOTICE-ROSEN-NATIONAL-TRIAL-LAWYERS-Encourages-Tesla-Inc-Investors-with-Losses-in-Excess-of-100K-to-Secure-Counsel-Before-Important-Deadline-in-Securities-Class-Action-TSLA.html",
            "urlToImage": "https://ml.globenewswire.com/Resource/Download/745335af-3a3a-4fb5-84c0-fdedc9adf092",
            "publishedAt": "2023-03-17T21:26:00Z",
            "content": "NEW YORK, March 17, 2023 (GLOBE NEWSWIRE) -- \r\nWHY: Rosen Law Firm, a global investor rights law firm, reminds purchasers of the securities of Tesla, Inc. (NASDAQ: TSLA) between February 19, 2019 and… [+3899 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Snopes.com"
            },
            "author": "Izz Scott LaMagdeleine",
            "title": "Did Elon Musk Punch CNN Anchor Don Lemon During an Interview?",
            "description": "The \"news story\" was labeled as satire.",
            "url": "https://www.snopes.com/fact-check/did-elon-musk-punch-cnn-anchor-don-lemon-during-an-interview/",
            "urlToImage": "https://mediaproxy.snopes.com/width/1200/https://media.snopes.com/2023/03/don_lemon_head_shot.jpg",
            "publishedAt": "2023-03-17T20:43:00Z",
            "content": "On Feb. 19, 2023, the website Chimniii published an \"article\" claiming that Twitter CEO Elon Musk punched CNN anchor Don Lemon in the face during an interview:\r\nElon Musk's Attempt at Boxing Demonstr… [+1060 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Peter Johnson",
            "title": "Mini Bronco-like electric SUV made by General Motors spotted in China",
            "description": "The first images of the Baojun Yep (YueYe in Chinese) – a mini electric SUV made by a joint venture between GM, SAIC, and Wuling (SGMW) – have surfaced in China. The two-door compact SUV bears a resemblance to a Ford Bronco, only fun-sized.\n more…\nThe post Mi…",
            "url": "https://electrek.co/2023/03/17/mini-bronco-like-electric-suv-made-by-gm-jv-spotted-in-china/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/03/GM-mini-electric-SUV-2.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-17T20:35:28Z",
            "content": "The first images of the Baojun Yep (YueYe in Chinese) a mini electric SUV made by a joint venture between GM, SAIC, and Wuling (SGMW) have surfaced in China. The two-door compact SUV bears a resembla… [+2509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Joe Wituschek",
            "title": "Tesla introduces ‘Drive on Sunshine’ solar charging feature",
            "description": "Tesla is adding quite a few features with its latest app update. Spotted by Not a Tesla App, the 4.19 update to the Tesla app …\nThe post Tesla introduces ‘Drive on Sunshine’ solar charging feature appeared first on BGR.",
            "url": "https://bgr.com/tech/tesla-introduces-drive-on-sunshine-solar-charging-feature/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/02/tesla-supercharger.jpeg?quality=82&strip=all",
            "publishedAt": "2023-03-17T20:21:14Z",
            "content": "Tesla is adding quite a few features with its latest app update.\r\nSpotted by Not a Tesla App, the 4.19 update to the Tesla app adds its new “Drive on Sunshine” feature, makes the charging membership … [+1647 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Times"
            },
            "author": "Griffin Davis",
            "title": "Experts Doubt Tesla's Mystery Magnet—Can Elon Really Create a Next-Gen Drive Unit?",
            "description": "Here's why the next-gen Tesla permanent magnet engine might not arrive.",
            "url": "https://www.techtimes.com/articles/289154/20230317/why-teslas-mystery-magnet-doubted-experts-elon-musk-really-create.htm",
            "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/423599/why-teslas-mystery-magnet-doubted-by-experts-can-elon-musk-really-create-this-next-gen-drive-unit.jpg",
            "publishedAt": "2023-03-17T20:07:22Z",
            "content": "The Tesla mystery magnet, which aims to remove the use of rare-earth elements in EV engines, was recently introduced at the Investor Day 2023 event. \r\nThe EV maker boastfully unveiled this new techno… [+2297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "OilPrice.com"
            },
            "author": "Haley Zaremba",
            "title": "Residential Heat Pumps Could Cut U.S. Energy Consumption In Half",
            "description": "In November of last year, some of the greatest minds and biggest influencers in the global energy sector gathered in Sharm el Sheikh, Egypt for the 27th annual Conference of the Parties (COP27) to discuss climate change. The two week conference was crowded wi…",
            "url": "https://oilprice.com/Energy/Energy-General/Residential-Heat-Pumps-Could-Cut-US-Energy-Consumption-In-Half.html",
            "urlToImage": "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-03-17_pgsembtybv.jpg",
            "publishedAt": "2023-03-17T20:00:00Z",
            "content": "Uncertainty is dominating oil markets…\r\nChinese refinery throughputs rebounded in…\r\nBearish sentiment continues to dominate…\r\nBy Haley Zaremba - Mar 17, 2023, 3:00 PM CDTIn November of last year, som… [+4537 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New Atlas"
            },
            "author": "Ben Coxworth",
            "title": "Tentsla adds a four-person tent to the back of a Tesla Model Y",
            "description": "While we've seen several camping concepts which incorporate the Tesla Cybertruck, chances are most of us will never own such a vehicle. The Tentsla X1 tent, however, is aimed at the existing – and widely owned – Tesla Model Y SUV.Continue ReadingCategory: Out…",
            "url": "https://newatlas.com/outdoors/tentsla-x1-tent-tesla-model-y/",
            "urlToImage": "https://assets.newatlas.com/dims4/default/76793c9/2147483647/strip/true/crop/1365x717+0+97/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F00%2F04%2F0d6bf71c4698826d0325dcd30177%2F332305358-1595294817655644-1745544342156385969-n-1.jpeg&na.image_optimisation=0",
            "publishedAt": "2023-03-17T19:59:47Z",
            "content": "While we've seen several camping concepts which incorporate the Tesla Cybertruck, chances are most of us will never own such a vehicle. The Tentsla X1 tent, however, is aimed at the existing and wide… [+1976 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "barrons.com",
            "title": "EV Buyers Can Reserve a Volvo EX90. How It Compares to a Tesla Model Y",
            "description": "The new all-electric Volvo EX90 is an impressive car, but it is a lot more expensive than a similar Model Y. #volvo #modely",
            "url": "https://biztoc.com/x/fe6c297dd5a4778b",
            "urlToImage": "https://c.biztoc.com/p/fe6c297dd5a4778b/og.webp",
            "publishedAt": "2023-03-17T19:42:10Z",
            "content": "The new all-electric Volvo EX90 is an impressive car, but it is a lot more expensive than a similar Model Y. \r\n#volvo#modely\r\n This story appeared on barrons.com, 2023-03-17."
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Al Root",
            "title": "EV Buyers Can Reserve a Volvo EX90. How It Compares to a Tesla.",
            "description": "The new all-electric Volvo EX90 is an impressive car, but it is a lot more expensive than a similar Model Y.",
            "url": "https://www.barrons.com/articles/ev-tesla-stock-volvo-ex90-d2b9dc7f",
            "urlToImage": "https://images.barrons.com/im-694928/social",
            "publishedAt": "2023-03-17T19:38:57Z",
            "content": "There is a new all-electric vehicles U.S. car buyers can reserve: the Volvo EX90 seven-seat SUV. Like all EVs, it will be compared with offerings from Tesla, the market leader. The EX90, a higher-end… [+2560 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Fred Lambert",
            "title": "Podcast: Tesla Supercharger v4, VW ID2 $25,000 EV, Aptera, and more",
            "description": "On the Electrek Podcast, we discuss the most popular news in the world of sustainable transport and energy. In this week’s episode, we discuss new details about Tesla Supercharger v4, VW’s ID2 $25,000 EV, Aptera getting a big grant, and more.\n more…\nThe post …",
            "url": "https://electrek.co/2023/03/17/podcast-tesla-supercharger-v4-vw-id2-25000-ev-aptera/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2017/12/business_card-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-17T19:35:33Z",
            "content": "On the Electrek Podcast, we discuss the most popular news in the world of sustainable transport and energy. In this weeks episode, we discuss new details about Tesla Supercharger v4, VW’s ID2 $25,000… [+809 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Visual Capitalist"
            },
            "author": "VisualCapitalist",
            "title": "The Richest People In The World In 2023",
            "description": "After witnessing record gains in wealth, ultra-high net worth individuals (UHNWIs) lost a combined $10 trillion last year. A lagging stock market dented these fortunes against high interest rates, energy shocks, and economic uncertainty. But some of the world…",
            "url": "https://www.visualcapitalist.com/the-richest-people-in-the-world-in-2023/",
            "urlToImage": "https://www.valuewalk.com/wp-content/uploads/2023/03/Richest-People.jpeg",
            "publishedAt": "2023-03-17T19:21:58Z",
            "content": "After witnessing record gains in wealth, ultra-high net worth individuals (UHNWIs) lost a combined $10 trillion last year.\r\nA lagging stock market dented these fortunes against high interest rates, e… [+5125 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "theguardian.com",
            "title": "‘We are a little bit scared’: OpenAI CEO warns of risks of artificial intelligence",
            "description": "Sam Altman, CEO of OpenAI, the company that developed the controversial consumer-facing artificial intelligence application ChatGPT, has warned that the technology comes with real dangers as it reshapes society. Altman, 37, stressed that regulators and societ…",
            "url": "https://biztoc.com/x/c48e6d204d048cb9",
            "urlToImage": "https://c.biztoc.com/p/c48e6d204d048cb9/og.webp",
            "publishedAt": "2023-03-17T19:20:12Z",
            "content": "Sam Altman, CEO of OpenAI, the company that developed the controversial consumer-facing artificial intelligence application ChatGPT, has warned that the technology comes with real dangers as it resha… [+286 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Typepad.com"
            },
            "author": "Tracey Roberts",
            "title": "Weekly SSRN Tax Article Review And Roundup: Roberts Reviews Taxing Luxury Emissions By Wallace & Welton",
            "description": "This week, Tracey Roberts (Cumberland; Google Scholar) reviews a new work by Clinton G. Wallace (South Carolina; Google Scholar) and Shelley Welton (Penn), Taxing Luxury Emissions, 106 Cornell L. Rev. __ (2023). One of the greatest challenges to global coordi…",
            "url": "https://taxprof.typepad.com/taxprof_blog/2023/03/weekly-ssrn-tax-article-review-and-roundup-roberts-reviews-taxing-luxury-emissions-by-wallace-welton.html",
            "urlToImage": "https://taxprof.typepad.com/.a/6a00d8341c4eab53ef026bde9e2fc9200c-220si",
            "publishedAt": "2023-03-17T19:01:00Z",
            "content": "They also argue that until they reach the basic standard of living enjoyed throughout Europe and the United States, they should be exempt from such taxation or regulations. In response, countries lik… [+7202 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Gary Gastelu",
            "title": "Wild custom Tesla can drive upside down",
            "description": "A YouTube channel built a Tesla with custom 10-foot-tall wheels to see if the electric sedan could be driven upside down, unlike an internal combustion engine car.",
            "url": "https://www.foxnews.com/auto/wild-custom-tesla-can-drive-upside-down",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/tesla-wheel-upside.jpg",
            "publishedAt": "2023-03-17T18:59:55Z",
            "content": "And you thought the Cybertruck was the craziest Tesla.\r\nYouTube channel WhistlinDiesel posted a video testing the durability of a Tesla Model 3 by putting it through a number of extreme challenges, w… [+1568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Fred Lambert",
            "title": "Cadillac goes after Tesla by setting up test drives at Supercharger station",
            "description": "GM’s Cadillac is going after Tesla’s clientele in a not-so-subtle way by setting up test drives directly at a Tesla Supercharger station.\n more…\nThe post Cadillac goes after Tesla by setting up test drives at Supercharger station appeared first on Electrek.",
            "url": "https://electrek.co/2023/03/17/cadillac-goes-after-tesla-setting-up-test-drives-supercharger-station/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/03/Cadillac-Tesla-Supercharger-station.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-17T18:49:44Z",
            "content": "GM’s Cadillac is going after Tesla’s clientele in a not-so-subtle way by setting up test drives directly at a Tesla Supercharger station.\r\nHow can you find people who like electric vehicles? If you f… [+1957 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tenable.com"
            },
            "author": "Satnam Narang",
            "title": "OpenAI’s ChatGPT and GPT-4 Used as Lure in Phishing Email, Twitter Scams to Promote Fake OpenAI Tokens",
            "description": "OpenAI’s ChatGPT and GPT-4 Used as Lure in Phishing Email, Twitter Scams to Promote Fake OpenAI TokensHoping to cash in on the massive interest around OpenAI’s GPT-4 – ChatGPT’s new multimodal model – scammers have launched phishing campaigns via email and Tw…",
            "url": "https://www.tenable.com/blog/openai-chatgpt-and-gpt-4-used-as-lure-in-phishing-scams-to-promote-fake-token-airdrop",
            "urlToImage": "https://www.tenable.com/sites/default/files/styles/640x360/public/images/articles/openai-chatgpt-gpt-4-scam-blog.png?itok=dFbXOQb1",
            "publishedAt": "2023-03-17T18:47:09Z",
            "content": "OpenAIs ChatGPT and GPT-4 Used as Lure in Phishing Email, Twitter Scams to Promote Fake OpenAI Tokens\r\nHoping to cash in on the massive interest around OpenAIs GPT-4 ChatGPTs new multimodal model sca… [+7342 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Guest Contributor",
            "title": "Tesla’s Engineering Headquarters in California",
            "description": "Tesla officially moved its corporate headquarters from California to Texas in 2021, but in recent weeks, the automaker has debuted another new headquarters in the West Coast state. Not far from the company’s Fremont, California Gigafactory, the automaker now …",
            "url": "https://cleantechnica.com/2023/03/17/teslas-engineering-headquarters-in-california/",
            "urlToImage": "http://cleantechnica.com/files/2019/08/201907-Tesla-supercharger-buelton-california-public-KYLE-2-e1656514653641.jpg",
            "publishedAt": "2023-03-17T18:42:19Z",
            "content": "Tesla officially moved its corporate headquarters from California to Texas in 2021, but in recent weeks, the automaker has debuted another new headquarters in the West Coast state. Not far from the c… [+3330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Highsnobiety"
            },
            "author": "Highsnobiety",
            "title": "Now You Can Finally Own Land Rover’s Original Defender (in LEGO)",
            "description": "There are LEGO sets and then there are LEGO sets. LEGO’s Land Rover Classic Defender 90 is one of the latter, a classic build made better by the addition of all kinda new details (though with a price tag to match). Land Rover’s original Defender, debuted in 1…",
            "url": "https://www.highsnobiety.com/p/lego-land-rover-defender-2/",
            "urlToImage": "https://www.highsnobiety.com/static-assets/thumbor/_ne7o6_7oyj6qWdL1o-DArfcq7o=/1800x1200/www.highsnobiety.com/static-assets/wp-content/uploads/2023/03/17181343/land-rover-defender-lego-2.jpg",
            "publishedAt": "2023-03-17T18:17:17Z",
            "content": "There are LEGO sets and then there are LEGO sets. LEGO's Land Rover Classic Defender 90 is one of the latter, a classic build made better by the addition of all kinda new details (though with a price… [+1537 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HYPEBEAST"
            },
            "author": "info@hypebeast.com (Hypebeast)",
            "title": "Meta Rolls Out Its Paid Verification Service on Instagram and Facebook in the US",
            "description": "Mark Zuckerberg — CEO of Meta — has just announced that its paid verification program has just launched in Instagram and Facebook in the US. “You can get a badge, proactive impersonation protection and direct access to customer support,\" he stated on Friday i…",
            "url": "https://hypebeast.com/2023/3/meta-paid-verification-instagram-facebook-us",
            "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Fmeta-paid-verification-instagram-facebook-us-tw.jpg?w=960&cbr=1&q=90&fit=max",
            "publishedAt": "2023-03-17T18:07:47Z",
            "content": "Mark Zuckerberg CEO of Meta has just announced that its paid verification program has just launched in Instagram and Facebook in the US. You can get a badge, proactive impersonation protection and di… [+1140 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Patrick Campanale",
            "title": "ALLPOWERS S1500 portable power station with four AC plugs falls 50% to $499 in New Green Deals",
            "description": "If you’ve been in the market for a new portable power station, then we have the deal for you. Coming in at 50% below its normal rate, and marking a new all-time low, the packs a lot of features for $499. For starters, it has a 1,092Wh capacity and can output …",
            "url": "https://electrek.co/2023/03/17/allpowers-s1500-power-station-more-new-green-deals/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/03/allpowers-s1500-portable-power-station.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-03-17T18:06:41Z",
            "content": "If you’ve been in the market for a new portable power station, then we have the deal for you. Coming in at 50% below its normal rate, and marking a new all-time low, the ALLPOWERS S1500 packs a lot o… [+6931 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Wallace Witkowski",
            "title": "It’s not the ‘Twilight Zone,’ Silicon Valley Bank turned big tech into the ‘new safety trade’",
            "description": "The demise of Silicon Valley Bank may pose an existential crisis for many startups this year, but for big tech, it's a boon.",
            "url": "https://www.marketwatch.com/story/its-not-the-twilight-zone-silicon-valley-bank-turned-big-tech-into-the-new-safety-trade-f3e9856",
            "urlToImage": "https://images.mktw.net/im-745949/social",
            "publishedAt": "2023-03-17T18:01:00Z",
            "content": "The demise of Silicon Valley Bank may pose an existential crisis for many startups this year, but for big tech, its a boon as investors rush to established names, one analyst maintained Friday. While… [+3408 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello");
        this.state={
            articles: this.articles,
            loading : false

        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=636945ee466a4bfc980c489959cfeb70";
        let data= await fetch(url);
        let parseddata=await data.json();
        console.log(parseddata);
    }
  render() {
    return (
      <div className='container my-3'> 
      <div className='row'>
      {this.state.articles.map((element)=>{
            return <div className='col-md-4' >
            <NewsItem key={element.url} title={!element.title?element.title.slice(0,88):""} desciption={element.description?element.description:""}imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
      })}
        

      </div>
    </div> 
    )
  }
}

export default News
