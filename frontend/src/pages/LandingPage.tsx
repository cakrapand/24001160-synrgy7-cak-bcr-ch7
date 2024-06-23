import happyGirl from "../assets/img/happy_girl.png";
import imgPhoto from "../assets/img/img_photo.png";
import mercedes from "../assets/img/mercedes.png";
import icon24Hrs from "..//assets/icon/icon_24hrs.svg";
import iconComplete from "../assets/icon/icon_complete.svg";
import iconFacebook from "..//assets/icon/icon_facebook.svg";
import iconInstagram from "..//assets/icon/icon_instagram.svg";
import iconMail from "..//assets/icon/icon_mail.svg";
import iconPrice from "..//assets/icon/icon_price.svg";
import iconProfessional from "..//assets/icon/icon_professional.svg";
import iconTwitch from "..//assets/icon/icon_twitch.svg";
import iconTwitter from "..//assets/icon/icon_twitter.svg";
import list from "..//assets/icon/list.svg";
import star from "..//assets/icon/star.svg";

const LandingPage = () => {
  return (
    <>
      <header
        id='navbar'
        className='border'>
        <div className='container'>
          <nav className='navbar fixed-top navbar-expand-lg'>
            <div className='container'>
              <a
                className='navbar__brand'
                href='#hero'></a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarText'
                aria-controls='navbarText'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarText'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 gap-5'>
                  <li className='nav-item navbar__item'>
                    <a
                      className='nav-link'
                      href='#service'>
                      Our Service
                    </a>
                  </li>
                  <li className='nav-item navbar__item'>
                    <a
                      className='nav-link'
                      href='#whyus'>
                      Why Us
                    </a>
                  </li>
                  <li className='nav-item navbar__item'>
                    <a
                      className='nav-link'
                      href='#testimonial'>
                      Testimonial
                    </a>
                  </li>
                  <li className='nav-item navbar__item'>
                    <a
                      className='nav-link'
                      href='#faq'>
                      FAQ
                    </a>
                  </li>
                  <li className='nav-item navbar__item'>
                    <button className='cta'>Register</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section id='hero'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='m-auto col-md-5 pt-5'>
              <h1>Sewa & Rental Mobil Terbaik di Kawasan Malang</h1>
              <p className='fs-14 fw-light'>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
                harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button className='cta'>Mulai Sewa Mobil</button>
            </div>
            <div className='col-md-6'>
              <div className='hero__car'>
                <div></div>
                <img
                  src={mercedes}
                  alt='Mercedes Car'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='service'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
              <div className='service__left'>
                <div className='service__img'>
                  <div className='service__img--crop'>
                    <img
                      src={happyGirl}
                      alt='Happy Girl'
                    />
                  </div>
                  <div className='service__img--circle'>
                    <img
                      src={happyGirl}
                      alt='Happy Girl'
                    />
                  </div>
                </div>
                <span className=' service__circle service__circle--red'></span>
                <span className='service__circle service__circle--yellow'></span>
                <span className='service__circle service__circle--green'></span>
              </div>
            </div>
            <div className='col-md-4 my-auto'>
              <h3>Best Car Rental for any kind of trip in Malang!</h3>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
                dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
                perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <ul>
                <li>
                  <div className='d-flex align-items-center gap-3'>
                    <img
                      src={list}
                      alt='Bullet List'
                    />
                    <p className='m-0'>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                  </div>
                </li>

                <li>
                  <div className='d-flex align-items-center gap-3'>
                    <img
                      src={list}
                      alt='Bullet List'
                    />
                    <p className=' m-0'>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                  </div>
                </li>

                <li>
                  <div className='d-flex align-items-center gap-3'>
                    <img
                      src={list}
                      alt='Bullet List'
                    />
                    <p className=' m-0'>Sewa Mobil Jangka Panjang Bulanan</p>
                  </div>
                </li>

                <li>
                  <div className='d-flex align-items-center gap-3'>
                    <img
                      src={list}
                      alt='Bullet List'
                    />
                    <p className=' m-0'>Gratis Antar - Jemput Mobil di Bandara</p>
                  </div>
                </li>

                <li>
                  <div className='d-flex align-items-center gap-3'>
                    <img
                      src={list}
                      alt='Bullet List'
                    />
                    <p className=' m-0'>Layanan Airport Transfer / Drop In Out</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='whyus'>
        <div className='container'>
          <h3 className='text-lg-start text-center'>Why Us?</h3>
          <p className='text-lg-start text-center'>Mengapa harus pilih Binar Car Rental?</p>
          <div className='d-flex flex-row justify-content-between pt-3 flex-wrap gap-4'>
            <div className='whyus__card'>
              <img
                src={iconComplete}
                alt='Icon Complete'
              />
              <p className='whyus__card--title'>Mobil Lengkap</p>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>

            <div className='whyus__card'>
              <img
                src={iconPrice}
                alt='Icon Price'
              />
              <p className='whyus__card--title'>Harga Murah</p>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>

            <div className='whyus__card'>
              <img
                src={icon24Hrs}
                alt='Icon 24 Hours'
              />
              <p className='whyus__card--title'>Layanan 24 Jam</p>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir
                minggu
              </p>
            </div>

            <div className='whyus__card'>
              <img
                src={iconProfessional}
                alt='Icon Professional'
              />
              <p className='whyus__card--title'>Sopir Profesional</p>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonial'>
        <div className='container'>
          <h3 className='text-center'>Testimonial</h3>
          <p className='text-center'>Berbagai review positif dari para pelanggan kami</p>
          <div
            id='carouselExample'
            className='carousel carousel-dark slide m-auto'>
            <div className='carousel-inner '>
              <div className='carousel-item active'>
                <div className='d-flex flex-row align-items-center gap-5'>
                  <img
                    src={imgPhoto}
                    alt='Testimonial Photo'
                  />
                  <div>
                    <div className='d-flex mb-2'>
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__name'>John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='d-flex flex-row align-items-center gap-5'>
                  <img
                    src={imgPhoto}
                    alt='Testimonial Photo'
                  />
                  <div>
                    <div className='d-flex mb-2'>
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__name'>John Dee 33, Bromo</p>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='d-flex flex-row align-items-center gap-5'>
                  <img
                    src={imgPhoto}
                    alt='Testimonial Photo'
                  />
                  <div>
                    <div className='d-flex mb-2'>
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                      <img
                        src={star}
                        alt='Star Rating'
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className='testimonial__name'>John Dee 34, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExample'
              data-bs-slide='prev'>
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExample'
              data-bs-slide='next'>
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </section>

      <section id='started'>
        <div className='container'>
          <div className='started__content text-center text-white w-50 mx-auto'>
            <h2>Sewa Mobil di Malang Sekarang</h2>
            <p className='mt-4 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className='cta mt-5'>Mulai Sewa Mobil</button>
          </div>
        </div>
      </section>

      <section id='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h3>Frequently Asked Question</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='col-md-7'>
              <div
                className='accordion'
                id='accordionFaq'>
                <div className='accordion-item'>
                  <h4 className='accordion-header'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'>
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h4>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionFaq'>
                    <div className='accordion-body'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla
                      error quasi ullam, eum officia, enim pariatur, voluptatibus ipsa possimus
                      facilis voluptatum? Temporibus non fugiat perferendis magnam necessitatibus,
                      unde quod?
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h4 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'>
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h4>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionFaq'>
                    <div className='accordion-body'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla
                      error quasi ullam, eum officia, enim pariatur, voluptatibus ipsa possimus
                      facilis voluptatum? Temporibus non fugiat perferendis magnam necessitatibus,
                      unde quod?
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h4 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'>
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h4>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionFaq'>
                    <div className='accordion-body'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla
                      error quasi ullam, eum officia, enim pariatur, voluptatibus ipsa possimus
                      facilis voluptatum? Temporibus non fugiat perferendis magnam necessitatibus,
                      unde quod?
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h4 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'>
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h4>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionFaq'>
                    <div className='accordion-body'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla
                      error quasi ullam, eum officia, enim pariatur, voluptatibus ipsa possimus
                      facilis voluptatum? Temporibus non fugiat perferendis magnam necessitatibus,
                      unde quod?
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h4 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'>
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h4>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionFaq'>
                    <div className='accordion-body'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla
                      error quasi ullam, eum officia, enim pariatur, voluptatibus ipsa possimus
                      facilis voluptatum? Temporibus non fugiat perferendis magnam necessitatibus,
                      unde quod?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='d-flex justify-content-between flex-column flex-lg-row'>
            <div>
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className='d-flex flex-column gap-3'>
              <a
                className='footer__nav'
                href='#service'>
                Our Service
              </a>
              <a
                className='footer__nav'
                href='#whyus'>
                Why Us
              </a>
              <a
                className='footer__nav'
                href='#testimonial'>
                Testimonial
              </a>
              <a
                className='footer__nav'
                href='#faq'>
                FAQ
              </a>
            </div>
            <div>
              <p>Connect with us</p>
              <div className='d-flex flex-row gap-3'>
                <a
                  href=''
                  target='_blank'
                  className='pointer-event'>
                  <img
                    src={iconFacebook}
                    alt='Facebook Binar'
                  />
                </a>
                <a
                  href=''
                  target='_blank'
                  className='pointer-event'>
                  <img
                    src={iconInstagram}
                    alt='Instagram Binar'
                  />
                </a>
                <a
                  href=''
                  target='_blank'
                  className='pointer-event'>
                  <img
                    src={iconTwitter}
                    alt='Twitch Binar'
                  />
                </a>
                <a
                  href=''
                  target='_blank'
                  className='pointer-event'>
                  <img
                    src={iconMail}
                    alt='Mail Binar'
                  />
                </a>
                <a
                  href=''
                  target='_blank'
                  className='pointer-event'>
                  <img
                    src={iconTwitch}
                    alt='Twitter Binar'
                  />
                </a>
              </div>
            </div>
            <div>
              <p>Copyright Binar 2022</p>
              <a
                href='#hero'
                className='navbar__brand'></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
