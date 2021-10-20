// Content of modals container
function on_load(){
    document.getElementById('modal_container').innerHTML = 
    `<!-- Modal -->
    <div class="modal fade" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header py-1">
            <h4 class="modal-title" id="exampleModalLabel">Bali</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/bali1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/bali2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/bali3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
            <ul class="mt-3">
                <li><b>Country:</b> Indonesia</li>
                <li><b>Climate:</b>  Fairly even climate all year round. Average year-round temperature 
                stands at around 30 °C (86 °F) with a humidity level of about 85%.
                </li>
                <li><b>Famous for:</b> beaches, volcanoes, Komodo dragons and jungles sheltering elephants, 
                orangutans and tigers.
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header py-1">
            <h4 class="modal-title" id="exampleModalLabel">Marrakesh</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/marrakesh.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/marrakesh2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/marrakesh3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
            <ul class="mt-3">
                <li><b>Country:</b> Morocco</li>
                <li><b>Climate:</b>  A hot semi-arid climate predominates at Marrakesh. Average temperatures 
                range from 12 °C (54 °F) in the winter to 26–30 °C (79–86 °F) in the summer
                </li>
                <li><b>Famous for:</b> Mosques, palaces and lush gardens. It’s known as The Red City thanks 
                to the color of the brick walls surrounding the city
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="Modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Maldives</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/maldives.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/maldives2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/maldives3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> Maldives</li>
              <li><b>Climate:</b> Tropical monsoon climate, the temperature is constantly hot and often humid.
              The average high temperature is 31.5 °C and the average low temperature is 26.4 °C.
              </li>
              <li><b>Famous for:</b> Luxurious hotel resorts, with white sandy beaches, underwater villas 
              and restaurants and bright blue waters.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Cape Town</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/cape-town.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/cape-town2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/cape-town3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel4" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> South Africa</li>
              <li><b>Climate:</b> Warm Mediterranean climate with mild, moderately wet winters and dry, warm summers.
              Average temperatures range from 8.5 °C in the winter to 16-26 °C in the summer
              </li>
              <li><b>Famous for:</b> Endless natural beauty and clifftop views, pastel pink neighborhoods and turquoise waters.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">London</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel5" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/london.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/london2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/london3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel5" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel5" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> England</li>
              <li><b>Climate:</b> Oceanic climate. Average temperatures range from 7.4 °C in the winter to 15.2 °C in the summer.
              </li>
              <li><b>Famous for:</b> Jungle skyline views, Big Ben, red phone boxes and world-class museums and galleries.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Lisbon</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel6" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/lisbon.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/lisbon2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/lisbon3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel6" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel6" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> Portugal</li>
              <li><b>Climate:</b>  Mediterranean climate (Köppen: Csa)[53] with mild, rainy winters and warm to hot, dry summers. 
              The average annual temperature is 17.4 °C , 21.3 °C during the day and 13.5 °C at night.
              </li>
              <li><b>Famous for:</b> Cobbled streets, pristine waters and local Atlantic beaches.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Buenos Aires</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/buenos-aires.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/buenos-aires2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/buenos-aires3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel7" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel7" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> Argentina</li>
              <li><b>Climate:</b> Humid subtropical climate with four distinct seasons. Average temperatures range from 13.6 °C in the winter to 22.7 °C in the summer.
              <li><b>Famous for:</b> Bookstores set in palatial theatres, tango dancing in the streets and brightly
               painted neighborhoods.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">New Orleans</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/new-orleans.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/new-orleans2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/new-orleans3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel8" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel8" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> United States</li>
              <li><b>Climate:</b>  Humid subtropical with short, generally mild winters and hot, humid summers.
              Average temperatures range from 16.9 °C in the winter to 25.8 °C in the summer.
              <li><b>Famous for:</b> Street music, festive vibe and a melting pot of French, African and American 
              cultures is well worth the trip.
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Hanoi</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/hanoi1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/hanoi2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/hanoi3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel9" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel9" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> Vietnam</li>
              <li><b>Climate:</b>   Humid subtropical climate with plentiful precipitation.
              The average annual temperature is 23.6 °C , with a mean relative humidity of more than 80%
              <li><b>Famous for:</b> Rich history, busy street life and centuries of French, Asian and 
              Chinese influences all blended into one bustling city
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Havana</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel10" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/havana.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/havana2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/havana3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel10" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel10" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> Cuba</li>
              <li><b>Climate:</b> Tropical climate. Average temperatures range from 22 °C in January and February to 28 °C in August.
              <li><b>Famous for:</b> Cuba’s capital is almost 500 years old and a riot of color. 
              Brightly painted buildings and vintage cars make Havana a photogenic dream.
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="Modal11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header py-1">
          <h4 class="modal-title" id="exampleModalLabel">Beijing</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pb-0">
            <!-- Begining of image slides -->
            <div id="carousel11" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="./images/beijing.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/beijing2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="./images/beijing3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel11" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel11" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
            <!-- end of image slides -->
          <ul class="mt-3">
              <li><b>Country:</b> China</li>
              <li><b>Climate:</b> Humid continental climate The monthly daily average temperature in January 
              is −2.9 °C, while in July it is 26.9 °C. 
              <li><b>Famous for:</b> Forbidden City, street food dishes of Peking duck and of course, 
              the Great Wall of China.
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
}