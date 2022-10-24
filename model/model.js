var MODEL = (function(){

    var homeContent = `<!--Hero-->
    <div class="home-hero">
    <div class="home-background">
    <div class="hero-img">
    <img src="images/home-hero.jpg" alt="home hero">
   </div>
    <div class="hero-text">
    <h1>Header goes here</h1>
    <h2>Less important text goes here</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dignissimos nam nisi rerum soluta nihil cum perspiciatis natus, voluptatum, laudantium fugit dolorum inventore repudiandae velit enim? Maxime rerum iure harum?</p>
    <div class="read-more">
        <a href="">Read More</a>
    </div>
</div>
</div>
</div>
<!--Home Quote-->
<div class="home-quote">
    <div class="home-quote-box">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, temporibus vel eius sunt quidem pariatur perferendis sequi vero perspiciatis, corporis nemo aliquam inventore alias sed quos, soluta beatae? Repellendus, voluptate? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt illo pariatur ullam assumenda ad animi modi eius vero sunt aspernatur voluptate dolores reprehenderit, obcaecati porro dolorem. Deleniti odit obcaecati deserunt!</p>
    <h5>John Smith</h5>
    <h6>Corporation CEO, books author</h6>
    </div>
</div>
<!--Home Upcoming Events-->
<div class="upcoming-events">
    <div class="upcoming-events-smaller">
    <div class="upcoming-title">
        <h2>UPCOMING EVENTS:</h2>
    </div>
    <div class="events">
        <div class="event-single">
            <div class="date">
                <h3>06</h3>
                <h4>JUN</h4>
            </div>
            <div class="event-text">
            <div class="lorem-white">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="lorem-pink">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta aliquam a eveniet, sequi voluptatum. Maxime dignissimos nemo nostru</p>
            </div>
            </div>
        </div>
        <div class="event-single">
            <div class="date">
                <h3>30</h3>
                <h4>JUL</h4>
            </div>
            <div class="event-text">
                <div class="lorem-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="lorem-pink">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta aliquam a eveniet, sequi voluptatum. Maxime dignissimos nemo nostru</p>
                </div>
                </div>
        </div>
        <div class="event-single">
            <div class="date">
                <h3>30</h3>
                <h4>AUG</h4>
            </div>
            <div class="event-text">
                <div class="lorem-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="lorem-pink">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta aliquam a eveniet, sequi voluptatum. Maxime dignissimos nemo nostru</p>
                </div>
                </div>
        </div>
        <div class="event-single">
            <div class="date">
                <h3>23</h3>
                <h4>NOV</h4>
            </div>
            <div class="event-text">
                <div class="lorem-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="lorem-pink">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta aliquam a eveniet, sequi voluptatum. Maxime dignissimos nemo nostru</p>
                </div>
                </div>
        </div>
        <div class="event-single">
            <div class="date">
                <h3>23</h3>
                <h4>DEC</h4>
            </div>
            <div class="event-text">
                <div class="lorem-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="lorem-pink">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta aliquam a eveniet, sequi voluptatum. Maxime dignissimos nemo nostru</p>
                </div>
                </div>
        </div>
    </div>
</div>
        </div>`;
    var aboutContent = `<div class="history">
    <div class="cupcakes">
     <img src="images/about.jpg" alt="about image">
    </div>
    <div class="history-title">
     <h2>OUR HISTORY:</h2>
    </div>
    <p class="history-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati quasi dignissimos, asperiores quam quisquam ducimus corporis fugit quis possimus impedit! Accusamus dicta qui libero quibusdam aperiam nobis! Neque, sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis labore pariatur. Distinctio quae voluptate, harum in atque dolore? Repudiandae suscipit doloremque porro voluptates assumenda veniam repellendus, deserunt modi nam.</p>
        </div>`;
    var galleryContent = `<h1 class="gallery-title">GALLERY:</h1>
    <div class="gallery">
    <div class="gallery-inside">
    <div id="foodFestival" class="one anchor"></div>

    <div id="deeJay" class="two anchor"></div>

    <div id="speech" class="three anchor"></div>

    <div id="openFoodFest" class="four anchor"></div>

    <div id="international" class="five anchor"></div>

    </div>
        </div>`;
    var blogContent = `<div class="blog-header">
    <h1>BLOG:</h1>
</div>
<div class="blog">
<div class="blog-inside">
    <div class="blog-inside-inside">
<a id="june" href="#" class="blog-single">
<div class="blog-date">
    <h3>06</h3>
    <h4>JUN</h4>
</div>
<div class="blog-information">
    <div class="blog-img">
        <img src="images/blog.jpg" alt="typewriter">
    </div>
    <p class="blog-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    <p class="blog-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quibusdam beatae nam neque repellat totam, enim distinctio, autem harum a temporibus commodi officiis, sed ratione est molestiae? Delectus, sint.</p>
</div>
</a>
<a id="july" href="#" class="blog-single">
    <div class="blog-date">
        <h3>30</h3>
        <h4>JUL</h4>
    </div>
    <div class="blog-information">
        <div class="blog-img">
            <img src="images/blog.jpg" alt="typewriter">
        </div>
        <p class="blog-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p class="blog-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quibusdam beatae nam neque repellat totam, enim distinctio, autem harum a temporibus commodi officiis, sed ratione est molestiae? Delectus, sint.</p>
    </div>
    </a>
    <a id="august" href="#" class="blog-single">
        <div class="blog-date">
            <h3>30</h3>
            <h4>AUG</h4>
        </div>
        <div class="blog-information">
            <div class="blog-img">
                <img src="images/blog.jpg" alt="typewriter">
            </div>
            <p class="blog-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p class="blog-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quibusdam beatae nam neque repellat totam, enim distinctio, autem harum a temporibus commodi officiis, sed ratione est molestiae? Delectus, sint.</p>
        </div>
        </a>
        <a id="november" href="#" class="blog-single">
            <div class="blog-date">
                <h3>23</h3>
                <h4>NOV</h4>
            </div>
            <div class="blog-information">
                <div class="blog-img">
                    <img src="images/blog.jpg" alt="typewriter">
                </div>
                <p class="blog-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p class="blog-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quibusdam beatae nam neque repellat totam, enim distinctio, autem harum a temporibus commodi officiis, sed ratione est molestiae? Delectus, sint.</p>
            </div>
            </a>
            <a id="december" href="#" class="blog-single">
                <div class="blog-date">
                    <h3>23</h3>
                    <h4>DEC</h4>
                </div>
                <div class="blog-information">
                    <div class="blog-img">
                        <img src="images/blog.jpg" alt="typewriter">
                    </div>
                    <p class="blog-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p class="blog-two">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nobis quibusdam beatae nam neque repellat totam, enim distinctio, autem harum a temporibus commodi officiis, sed ratione est molestiae? Delectus, sint.</p>
                </div>
                </a>
            </div>
            </div>
        </div>`;
    var contactContent = `<div class="contact">
    <div class="contact-header">
        <h1>CONTACT US:</h1>
    </div>
    <div class="contact-main-bigger">
    <div class="contact-main">
            <div class="form">
                <div class="first-name">
                    <input class="first" type="text" name="name" placeholder="Your name...">
                    <input class="first" type="text" name="email" placeholder="Email Address..."> 
                    <input class="first" type="text" name="company" placeholder="Company...">
                </div>
                <div class="msg">
                    <textarea class="message" name="" placeholder="Message..." cols="100" rows="10"></textarea>
                </div>
                <div class="send-message-box">
                    <a class="send-message" href="">SEND MESSAGE</a>
                </div>
              </div> 
              <div class="map">
              <div class="contact-photo">
              <img src="images/map copy 2.png" alt="map">
              </div>
              </div>
          </div>
        </div>
        </div>`;
    var foodFestivalContent = `<div class="entire-page">
  <div class="header-img">
      <div class="one-gallery-link-image">
          <img class="one-image" src="images/1.png" alt="Food">
      </div>
  </div>
  <div class="one-gallery-link-header">
      <h1 class="one-big-number">1.</h1>
      <h1 class="one-big-title">food festival</h1>
  </div>
  <div class="paragraphs">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquid impedit nostrum sunt rem enim doloremque doloribus, provident labore. Nihil, sit minus! Ut aperiam quod alias cupiditate beatae doloribus quis! lorem</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti commodi rem eveniet a? Deserunt quas in repellat facilis asperiores modi officiis. Voluptatum, iusto suscipit tempora aspernatur totam debitis odit.</p>
  </div>
        </div>`;
    var deeJayContent = `<div class="entire-page">
        <div class="two-header-img">
            <div class="two-gallery-link-image">
                <img class="two-image" src="images/2.jpeg" alt="dj">
            </div>
        </div>
        <div class="two-gallery-link-header">
            <h1 class="two-big-number">2.</h1>
            <h1 class="two-big-title">dee-jay</h1>
        </div>
        <div class="paragraphs">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquid impedit nostrum sunt rem enim doloremque doloribus, provident labore. Nihil, sit minus! Ut aperiam quod alias cupiditate beatae doloribus quis! lorem</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti commodi rem eveniet a? Deserunt quas in repellat facilis asperiores modi officiis. Voluptatum, iusto suscipit tempora aspernatur totam debitis odit.</p>
        </div>
        </div>`;
    var speechContent = `<div class="entire-page">
    <div class="three-header-img">
        <div class="three-gallery-link-image">
            <img class="three-image" src="images/3.jpg" alt="speech">
        </div>
    </div>
    <div class="three-gallery-link-header">
        <h1 class="three-big-number">3.</h1>
        <h1 class="three-big-title">speech</h1>
    </div>
    <div class="paragraphs">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquid impedit nostrum sunt rem enim doloremque doloribus, provident labore. Nihil, sit minus! Ut aperiam quod alias cupiditate beatae doloribus quis! lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti commodi rem eveniet a? Deserunt quas in repellat facilis asperiores modi officiis. Voluptatum, iusto suscipit tempora aspernatur totam debitis odit.</p>
    </div>
        </div>`;
    var openFoodFestContent = `<div class="entire-page">
    <div class="four-header-img">
        <div class="four-gallery-link-image">
            <img class="four-image" src="images/4.jpg" alt="foodfest">
        </div>
    </div>
    <div class="four-gallery-link-header">
        <h1 class="four-big-number">4.</h1>
        <h1 class="four-big-title">open foodfest</h1>
    </div>
    <div class="paragraphs">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquid impedit nostrum sunt rem enim doloremque doloribus, provident labore. Nihil, sit minus! Ut aperiam quod alias cupiditate beatae doloribus quis! lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti commodi rem eveniet a? Deserunt quas in repellat facilis asperiores modi officiis. Voluptatum, iusto suscipit tempora aspernatur totam debitis odit.</p>
    </div>
        </div>`;
    var internationalContent = `<div class="entire-page">
    <div class="five-header-img">
        <div class="five-gallery-link-image">
            <img class="five-image" src="images/5.png" alt="international">
        </div>
    </div>
    <div class="five-gallery-link-header">
        <h1 class="five-big-number">5.</h1>
        <h1 class="five-big-title">international</h1>
    </div>
    <div class="paragraphs">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aliquid impedit nostrum sunt rem enim doloremque doloribus, provident labore. Nihil, sit minus! Ut aperiam quod alias cupiditate beatae doloribus quis! lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti commodi rem eveniet a? Deserunt quas in repellat facilis asperiores modi officiis. Voluptatum, iusto suscipit tempora aspernatur totam debitis odit.</p>
    </div>
        </div>`;
    var juneContent = `<div class="blog-link-individual">
    <div class="blog-link-header">
        <div class="blog-link-img">
            <img src="images/blog.jpg" alt="blog">
        </div>
    
    <div class="blog-link-box">
        <h1>06</h1>
        <h2>JUN</h2>
    </div>
    </div>
    <div class="blog-link-extra">
    <div class="blog-link-paragraphs">
        <h3>Header #1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo optio nihil iste dolor voluptas quidem ut omnis tempore quod quaerat error consectetur temporibus voluptatem, ipsum inventore ab! Soluta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias inventore sapiente, repellendus praesentium maxime ratione est sit quis magnam cupiditate officia ex incidunt eveniet qui harum, nihil, consequuntur ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae qui voluptatem adipisci exercitationem, laboriosam pariatur, ratione natus quibusdam, harum perferendis. Quibusdam incidunt cupiditate non magni cum ea modi quasi?</p>
        <h3>Header #2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda impedit quae eius earum atque, veniam hic fugit laboriosam saepe illum illo, eos ad nostrum vitae, laborum quos ut soluta.</p>
    </div>
    </div>
        </div>`;
    var julyContent = `<div class="blog-link-individual">
    <div class="blog-link-header">
        <div class="blog-link-img">
            <img src="images/blog.jpg" alt="blog">
        </div>
    
    <div class="blog-link-box">
        <h1>30</h1>
        <h2>JUL</h2>
    </div>
    </div>
    <div class="blog-link-extra">
    <div class="blog-link-paragraphs">
        <h3>Header #1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo optio nihil iste dolor voluptas quidem ut omnis tempore quod quaerat error consectetur temporibus voluptatem, ipsum inventore ab! Soluta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias inventore sapiente, repellendus praesentium maxime ratione est sit quis magnam cupiditate officia ex incidunt eveniet qui harum, nihil, consequuntur ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae qui voluptatem adipisci exercitationem, laboriosam pariatur, ratione natus quibusdam, harum perferendis. Quibusdam incidunt cupiditate non magni cum ea modi quasi?</p>
        <h3>Header #2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda impedit quae eius earum atque, veniam hic fugit laboriosam saepe illum illo, eos ad nostrum vitae, laborum quos ut soluta.</p>
    </div>
    </div>
        </div>`;
    var augustContent = `<div class="blog-link-individual">
    <div class="blog-link-header">
        <div class="blog-link-img">
            <img src="images/blog.jpg" alt="blog">
        </div>
    
    <div class="blog-link-box">
        <h1>30</h1>
        <h2>AUG</h2>
    </div>
    </div>
    <div class="blog-link-extra">
    <div class="blog-link-paragraphs">
        <h3>Header #1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo optio nihil iste dolor voluptas quidem ut omnis tempore quod quaerat error consectetur temporibus voluptatem, ipsum inventore ab! Soluta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias inventore sapiente, repellendus praesentium maxime ratione est sit quis magnam cupiditate officia ex incidunt eveniet qui harum, nihil, consequuntur ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae qui voluptatem adipisci exercitationem, laboriosam pariatur, ratione natus quibusdam, harum perferendis. Quibusdam incidunt cupiditate non magni cum ea modi quasi?</p>
        <h3>Header #2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda impedit quae eius earum atque, veniam hic fugit laboriosam saepe illum illo, eos ad nostrum vitae, laborum quos ut soluta.</p>
    </div>
    </div>
        </div>`;
    var novemberContent = `<div class="blog-link-individual">
    <div class="blog-link-header">
        <div class="blog-link-img">
            <img src="images/blog.jpg" alt="blog">
        </div>
    
    <div class="blog-link-box">
        <h1>23</h1>
        <h2>NOV</h2>
    </div>
    </div>
    <div class="blog-link-extra">
    <div class="blog-link-paragraphs">
        <h3>Header #1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo optio nihil iste dolor voluptas quidem ut omnis tempore quod quaerat error consectetur temporibus voluptatem, ipsum inventore ab! Soluta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias inventore sapiente, repellendus praesentium maxime ratione est sit quis magnam cupiditate officia ex incidunt eveniet qui harum, nihil, consequuntur ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae qui voluptatem adipisci exercitationem, laboriosam pariatur, ratione natus quibusdam, harum perferendis. Quibusdam incidunt cupiditate non magni cum ea modi quasi?</p>
        <h3>Header #2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda impedit quae eius earum atque, veniam hic fugit laboriosam saepe illum illo, eos ad nostrum vitae, laborum quos ut soluta.</p>
    </div>
    </div>
        </div>`;
    var decemberContent = `<div class="blog-link-individual">
    <div class="blog-link-header">
        <div class="blog-link-img">
            <img src="images/blog.jpg" alt="blog">
        </div>
    
    <div class="blog-link-box">
        <h1>23</h1>
        <h2>DEC</h2>
    </div>
    </div>
    <div class="blog-link-extra">
    <div class="blog-link-paragraphs">
        <h3>Header #1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo optio nihil iste dolor voluptas quidem ut omnis tempore quod quaerat error consectetur temporibus voluptatem, ipsum inventore ab! Soluta, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias inventore sapiente, repellendus praesentium maxime ratione est sit quis magnam cupiditate officia ex incidunt eveniet qui harum, nihil, consequuntur ut.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae qui voluptatem adipisci exercitationem, laboriosam pariatur, ratione natus quibusdam, harum perferendis. Quibusdam incidunt cupiditate non magni cum ea modi quasi?</p>
        <h3>Header #2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error assumenda impedit quae eius earum atque, veniam hic fugit laboriosam saepe illum illo, eos ad nostrum vitae, laborum quos ut soluta.</p>
    </div>
    </div>
        </div>`;



        function initOtherListeners() {

            $("a").click(function(e) {
                let btnId = e.currentTarget.id;
                //console.log("Current page is " + btnId);
                MODEL.changePageContent(btnId);
            })

            $(".anchor").click(function(e) {
                let btnId2 = e.currentTarget.id;
                console.log("Current reference is " + btnId2);
                MODEL.changePageContent(btnId2);
            })

        }

        
        var _changePageContent = function(pageName) {
            let contentName = pageName + "Content";
           
            console.log('Pagename is ' + pageName)
            $("#app").html(eval(contentName));
             
            initOtherListeners();
        
        }

     
  


        
        return {
            changePageContent: _changePageContent,
        }
        
        })();