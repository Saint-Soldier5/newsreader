import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PnButtn from './PnButtn';
import PropTypes from 'prop-types'

export default class New extends Component {
    articles = [
        {
        "source": {
        "id": "usa-today",
        "name": "USA Today"
        },
        "author": "Erick Smith",
        "title": "Live updates: Georgia grabs lead on Alabama in fourth quarter of College Football Playoff title game - USA TODAY",
        "description": "Alabama seeks its seventh title under coach Nick Saban. Georgia looks for its first since 1980. Follow live updates from college football's title game",
        "url": "https://www.usatoday.com/story/sports/ncaaf/2022/01/10/college-football-championship-updates-alabama-georgia-cfp-title/9164679002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2022/01/11/USAT/ba9fddd7-8370-4792-84fd-22e0238efab0-MicrosoftTeams-image_1.png?crop=6911,3887,x1,y681&width=3200&height=1680&fit=bounds",
        "publishedAt": "2022-01-11T04:30:00Z",
        "content": "Sports Seriously: Dan Wolken breaks down how Alabama can beat Georgia in the national championship game and what another title would mean for Nick Sabans legacy with the Crimson Tide.\r\nUSA TODAY\r\nThe… [+15500 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Amir Vera, Brad Parks and Holly Yan, CNN",
        "title": "Chicago public school students will return to classroom Wednesday after teachers union suspends work action, mayor says - CNN",
        "description": "Chicago teachers will be back in school Tuesday and students are scheduled to return to in-person learning on Wednesday after the Chicago Teachers Union house of delegates voted to end the teachers' work action over Covid-19 mitigation measures, Mayor Lori Li…",
        "url": "https://www.cnn.com/2022/01/10/us/chicago-schools-teacher-union-mayor-monday/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220107153705-chicago-schools-parents-teacher-union-friday-file-010522-super-tease.jpg",
        "publishedAt": "2022-01-11T04:01:00Z",
        "content": "(CNN)Chicago teachers will be back in school Tuesday and students are scheduled to return to in-person learning on Wednesday after the Chicago Teachers Union house of delegates voted to end the teach… [+5754 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Manu Raju and Ted Barrett, CNN",
        "title": "Democrats scramble to sink Cruz's plan to impose sanctions over Nord Stream pipeline - CNN",
        "description": "Top Senate Democrats and the Biden administration are maneuvering behind the scenes to defeat a measure from GOP Sen. Ted Cruz of Texas that would impose sanctions on businesses associated with a major pipeline from Russia to Germany, aiming to shore up Democ…",
        "url": "https://www.cnn.com/2022/01/10/politics/nord-stream-pipeline-democrats-reaction-cruz/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220107161005-ted-cruz-0105-super-tease.jpg",
        "publishedAt": "2022-01-11T03:45:00Z",
        "content": "(CNN)Top Senate Democrats and the Biden administration are maneuvering behind the scenes to defeat a measure from GOP Sen. Ted Cruz of Texas that would impose sanctions on businesses associated with … [+5271 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Roni Caryn Rabin",
        "title": "In a First, Man Receives a Heart From a Genetically Altered Pig - The New York Times",
        "description": "The breakthrough may lead one day to new supplies of animal organs for transplant into human patients.",
        "url": "https://www.nytimes.com/2022/01/10/health/heart-transplant-pig-bennett.html",
        "urlToImage": "https://static01.nyt.com/images/2022/01/10/science/10transplant3/10transplant3-facebookJumbo.jpg",
        "publishedAt": "2022-01-11T03:38:11Z",
        "content": "It was either die or do this transplant, Mr. Bennett said before the surgery, according to officials at the University of Maryland Medical Center. I want to live. I know its a shot in the dark, but i… [+1721 chars]"
        },
        {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "ASHRAF KHALIL  Associated Press",
        "title": "Trump attorneys cite immunity, want Jan. 6 lawsuits tossed - ABC News",
        "description": "",
        "url": "https://abcnews.go.com/Politics/wireStory/trump-attorneys-cite-immunity-jan-lawsuits-tossed-82189324",
        "urlToImage": "https://s.abcnews.com/images/Politics/WireAP_51dc395b80204c0394cfe2f37f5cf70c_16x9_992.jpg",
        "publishedAt": "2022-01-11T03:14:40Z",
        "content": "WASHINGTON -- Attorneys for former President Donald Trump and his associates argued Monday that incendiary statements by Trump and others last Jan. 6 prior to the Capitol riot were protected speech a… [+4457 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Lisa Respers France, CNN",
        "title": "Bob Saget's cause of death being investigated - CNN",
        "description": "An autopsy was completed on Bob Saget Monday, according to the Orange County Medical Examiner in Florida.",
        "url": "https://www.cnn.com/2022/01/10/entertainment/bob-saget-cause-death-investigation/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210208091642-bob-saget-2019-file-super-tease.jpg",
        "publishedAt": "2022-01-11T03:09:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "WABC-TV"
        },
        "author": "Eyewitness News",
        "title": "Bronx fire: Hospitals work to save critically injured after 17 killed, including 8 children, in massive fire on East 181st - WABC-TV",
        "description": "Hospitals worked to save the lives of more than a dozen people critically injured by in a fire that killed 17, including eight children, in the Bronx.",
        "url": "https://abc7ny.com/bronx-fire-today-181st-street-333-east-ny/11448093/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/11451351_011022-wabc-ap-tremont-bronx-fire-img.jpg?w=1600",
        "publishedAt": "2022-01-11T02:37:30Z",
        "content": "TREMONT, Bronx (WABC) -- Hospitals are desperately working to save the lives of more than a dozen people critically injured by smoke in a fire that killed 17, including eight children, in the Bronx, … [+7055 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Helen Regan and Jessie Yeung, CNN",
        "title": "Judge orders Djokovic be freed from immigration detention in Australia - CNN",
        "description": "World tennis No. 1 Novak Djokovic should be allowed to defend his men's singles title at the Australian Open in Melbourne this month, after a judge quashed the government's decision to cancel his visa and ordered him to be freed.",
        "url": "https://www.cnn.com/2022/01/10/tennis/djokovic-australia-covid-hearing-intl-hnk/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220109171236-djokovic-legado-deportes-cnn-super-tease.jpg",
        "publishedAt": "2022-01-11T02:23:00Z",
        "content": "(CNN)World tennis No. 1 Novak Djokovic should be allowed to defend his men's singles title at the Australian Open in Melbourne this month, after a judge quashed the government's decision to cancel hi… [+7570 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NBCSports.com"
        },
        "author": "Charean Williams",
        "title": "Report: Dolphins, Bears seek to interview Brian Daboll - NBC Sports",
        "description": "Bills offensive coordinator Brian Daboll had several interviews for head coaching jobs in the last hiring cycle. He interviewed with the Chargers and Jets a year ago.Daboll will get other opportunities this offseason.The Dolphins and Bears have requested perm…",
        "url": "https://profootballtalk.nbcsports.com/2022/01/10/report-dolphins-bears-seek-to-interview-brian-daboll/",
        "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/01/GettyImages-1362842542-e1641866732465.jpg",
        "publishedAt": "2022-01-11T02:06:00Z",
        "content": "Bills offensive coordinator Brian Daboll had several interviews for head coaching jobs in the last hiring cycle. He interviewed with the Chargers and Jets a year ago.\r\nDaboll will get other opportuni… [+540 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Michael Barbaro, Sydney Harper, Michael Simon Johnson, Stella Tan, Kaitlin Roberts, Luke Vander Ploeg, Liz O. Baylen, Larissa Anderson, Marion Lozano",
        "title": "The Rise and Fall of the Golden Globes - The New York Times",
        "description": "For eight decades, the awards and the organization behind them  played an outsized role in Hollywood. Here’s what changed.",
        "url": "https://www.nytimes.com/2022/01/10/podcasts/the-daily/golden-globes-awards.html",
        "urlToImage": "https://static01.nyt.com/images/2022/01/09/arts/10daily-1/merlin_200046879_0491efbc-1868-46ea-aa2e-e23c5118f960-facebookJumbo.jpg",
        "publishedAt": "2022-01-11T02:01:24Z",
        "content": "Kyle Buchanan contributed reporting.\r\nSpecial thanks to Matt Stevens. \r\nThe Daily is made by Lisa Tobin, Rachel Quester, Lynsea Garrison, Clare Toeniskoetter, Paige Cowett, Michael Simon Johnson, Bra… [+778 chars]"
        },
        {
        "source": {
        "id": "the-hill",
        "name": "The Hill"
        },
        "author": "Joseph Choi",
        "title": "Fed Vice Chair Clarida to resign over pandemic stock trades | TheHill - The Hill",
        "description": "Federal Reserve Vice Chair Richard Clarida announced on Monday that he would be resigning from hi...",
        "url": "https://thehill.com/homenews/administration/589120-fed-vice-chair-clarida-to-resign-over-pandemic-stock-trades",
        "urlToImage": "https://thehill.com/sites/default/files/federalreserve_091619gn6_lead.jpg",
        "publishedAt": "2022-01-11T02:00:59Z",
        "content": "Federal Reserve Vice Chair Richard Clarida announced on Monday that he would be resigning from his position early following months of media reports scrutinizing stock trades he made toward the beginn… [+2869 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ScienceAlert"
        },
        "author": "Carly Cassella",
        "title": "The Dolphin Clitoris Is Full of Surprises, Scientists Discover - ScienceAlert",
        "description": "The bottlenose dolphin (Tersiops truncatus) appears to have a very large and well-developed clitoris, potentially better placed for coital pleasure than the clitoris of humans, according to new research.",
        "url": "https://www.sciencealert.com/behold-the-dolphin-clitoris-in-all-its-engorged-glory",
        "urlToImage": "https://www.sciencealert.com/images/2022-01/processed/BottlenoseDolphinUnderwater_1024.jpg",
        "publishedAt": "2022-01-11T01:44:23Z",
        "content": "The bottlenose dolphin (Tersiops truncatus) appears to have a very large and well-developed clitoris, potentially better placed for coital pleasure than the clitoris of humans, according to new resea… [+3928 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Mitchell Clark",
        "title": "Super Pumped gets a new, longer teaser with more Uber shenanigans - The Verge",
        "description": "There’s a new teaser trailer for Showtime’s Super Pumped: The Battle for Uber, the first season of which will cover the ride-sharing company and its former CEO Travis Kalanick, played by Joseph Gordon-Levitt.",
        "url": "https://www.theverge.com/2022/1/10/22877447/super-pumped-season-one-teaser-trailer-uber-travis-kalanick-showtime",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/shYVAOIErNOmyUzePow1zlOZUEw=/281x0:2418x1119/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23159836/Screen_Shot_2022_01_10_at_17.09.58.png",
        "publishedAt": "2022-01-11T01:27:18Z",
        "content": "Watch Joseph Gordon-Levitt say the line\r\nJoseph Gordon-Levitt plays Travis Kalanick in the shows first season.\r\nImage: Showtime\r\nTheres a new teaser for the first season of Super Pumped, Showtimes up… [+1206 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Mexican president contracts COVID-19 for second time, symptoms 'mild' - Reuters",
        "description": "Mexican President Andres Manuel Lopez Obrador on Monday announced he had contracted COVID-19 for a second time, saying he had a mild case and that he would keep working in isolation until he had recovered.",
        "url": "https://www.reuters.com/world/americas/mexican-president-lopez-obrador-tests-positive-covid-19-2022-01-11/",
        "urlToImage": "https://www.reuters.com/resizer/27BVX025a0BVtL4EqF6Vlgn-3yQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TKZAXNIRNZLMPNXDXOZ7VB5DYM.jpg",
        "publishedAt": "2022-01-11T01:20:00Z",
        "content": "MEXICO CITY, Jan 10 (Reuters) - Mexican President Andres Manuel Lopez Obrador on Monday announced he had contracted COVID-19 for a second time, saying he had a mild case and that he would keep workin… [+1989 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": "Choe Sang-Hun",
        "title": "North Korea Launches 2nd Ballistic Missile in a Week, South Korea Says - The New York Times",
        "description": "The launch came as the U.N. Security Council met to discuss the country’s growing weapons threat.",
        "url": "https://www.nytimes.com/2022/01/11/world/asia/north-korea-ballistic-missile-south-korea.html",
        "urlToImage": "https://static01.nyt.com/images/2022/01/10/multimedia/10nkorea-missile2/10nkorea-missile2-facebookJumbo.jpg",
        "publishedAt": "2022-01-11T01:17:34Z",
        "content": "Those tests indicated that the North was developing more sophisticated ways of delivering nuclear and other warheads to South Korea, Japan and American bases, according to defense analysts. Some of t… [+1293 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "U.S. insurers must cover eight at-home COVID tests per person monthly -White House - Reuters",
        "description": "Insurance companies will be required to cover eight over-the-counter at-home coronavirus tests per person each month starting Saturday, the Biden administration said, expanding access to highly sought-after kits as Americans grapple with a surge in coronaviru…",
        "url": "https://www.reuters.com/world/us/insurers-will-cover-8-at-home-covid-tests-per-person-each-month-white-house-2022-01-10/",
        "urlToImage": "https://www.reuters.com/resizer/yMnhHtdJIXD3v0AA-zfWxaBfcoo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/737UMLCJFJN6PBRZU3DTVYSKXE.jpg",
        "publishedAt": "2022-01-11T00:46:00Z",
        "content": "WASHINGTON, Jan 10 (Reuters) - Insurance companies will be required to cover eight over-the-counter at-home coronavirus tests per person each month starting Saturday, the Biden administration said, e… [+2066 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KATU"
        },
        "author": "KATU Staff",
        "title": "Oregon reports 18,538 new COVID cases, 18 new deaths over weekend - KATU",
        "description": "The Oregon Health Authority reported Monday 18,538 new cases of COVID-19 and 18 new deaths over a three-day period, last Friday to Sunday. The state&rsquo;s death toll now stands at 5,779 and 478,203 positive cases since the start of the pandemic. FRIDAY'S RE…",
        "url": "https://katu.com/news/coronavirus/oregon-reports-18538-new-covid-cases-18-new-deaths-over-weekend",
        "urlToImage": "https://katu.com/resources/media/68007e3a-c407-4001-8734-1380408c2e7c-large16x9_OHSUsintensivecareunit18.JPG?1641860918113",
        "publishedAt": "2022-01-11T00:32:27Z",
        "content": null
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Ron Amadeo",
        "title": "After ruining Android messaging, Google says iMessage is too powerful - Ars Technica",
        "description": "Google failed to compete with iMessage for years. Now it wants Apple to play nice.",
        "url": "https://arstechnica.com/gadgets/2022/01/after-ruining-android-messaging-google-says-imessage-is-too-powerful/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/08/Google-Messaging-mess-760x380.jpg",
        "publishedAt": "2022-01-11T00:12:57Z",
        "content": "62 with 49 posters participating\r\nGoogle took to Twitter this weekend to complain that iMessage is just too darn influential with today's kids. The company was responding to a Wall Street Journal rep… [+4474 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Isabelle Khurshudyan, Missy Ryan, Paul Sonne",
        "title": "Russia-U.S. talks hit impasse over NATO expansion as Moscow denies plans to invade Ukraine - The Washington Post",
        "description": "Monday's talks in Geneva, along with parallel discussions with European officials set for later this week, represent a crucial test of the Biden administration’s assertions that collaboration among global democracies can prevail over authoritarianism and the …",
        "url": "https://www.washingtonpost.com/world/2022/01/10/us-russia-delegations-meet-geneva/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63UZTADSCMI6ZITNDQQ4C2Y4SM.jpg&w=1440",
        "publishedAt": "2022-01-10T23:59:41Z",
        "content": "We were firm, however, in pushing back on security proposals that are simply nonstarters for the United States, she told reporters after the seven-hour meeting. We will not allow anyone to slam close… [+7438 chars]"
        },
        {
        "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
        },
        "author": "Alex Wilhelm",
        "title": "Daily Crunch: Take-Two Interactive will buy FarmVille creator Zynga for $12.7B - TechCrunch",
        "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
        "url": "http://techcrunch.com/2022/01/10/daily-crunch-take-two-interactive-will-buy-farmville-creator-zynga-for-12-7b/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/Zynga-FarmVille.png?w=727",
        "publishedAt": "2022-01-10T23:16:02Z",
        "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PST, subscribe here.\r\nHello and welcome to Daily Crunch for January 10, 2022! For those … [+5515 chars]"
        }
        ]
        

    constructor(){
        super();
        this.state = {
            article : this.articles,
            loading : false,
            page: 1
        }
    }

    static defaultProps ={
        country: "ca",
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    

    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c23754f3569f48fa8e55e24702798dad&page=1&pageSize=10`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
    this.setState({article: parseData.articles, totalResults: parseData.totalResults})
   }
    
   handlePrevbttn = async () =>{
        console.log("previous")
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c23754f3569f48fa8e55e24702798dad&page=${this.state.page - 1}&pageSize=10`
        let data = await fetch(url);
        let parseData = await data.json();
        
        this.setState({
        page: this.state.page - 1,    
        article: parseData.articles
    })
    }

     handleNextbttn = async () => {
        console.log("Next")
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

        }
        else{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c23754f3569f48fa8e55e24702798dad&page=${this.state.page + 1}&pageSize=10`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
    this.setState({
        page: this.state.page + 1,
        article: parseData.articles})
    }
    }
    render() {

        return (
            <div className='container my -3'>
                <h2>News - Hot Headlines</h2>
                <div className='row'>
                {this.state.article.map((element) =>{
                    return   <div className='col-md-4' key={element.url}>
                    <NewsItems  title={element.title} description={element.description} newsUrl = {element.url} imageUrl = {element.urlToImage} />
                </div>
                }
                )}
                <PnButtn handleNextbttn = {this.handleNextbttn} handlePrevbttn = {this.handlePrevbttn} page = {this.state.page} totalResults={this.state.totalResults}/>
                
     
                </div>
            </div>
        )
    }
}
