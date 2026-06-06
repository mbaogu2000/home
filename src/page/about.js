export function about() {
    return /*html*/`
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary fs-3" href="#">
                <i class="bi bi-building-hs text-secondary me-2"></i>LUXE<span class="text-secondary">ESTATE</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold align-items-center">
                    <li class="nav-item"><a class="nav-link px-3" href="home">Home</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="properties">Properties</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="agents">Agents</a></li>
                    <li class="nav-item"><a class="nav-link active text-primary px-3" href="about">About</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="contact">Contact</a></li>
                    <li class="nav-item ms-lg-3">
                        <a class="btn btn-primary text-white px-4 rounded-pill shadow-sm" href="#">Add Listing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sub-Header Section -->
    <section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;">
        <div class="container py-3">
            <h1 class="display-4 fw-bold mb-2">Our Corporate Story</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Brand Legacy Story -->
    <section class="py-5">
        <div class="container py-4">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <span class="text-primary fw-bold text-uppercase small tracking-wider">The Legacy</span>
                    <h2 class="fw-bold text-dark mt-1 mb-3">Redefining Premium Asset Management Since 2012</h2>
                    <p class="text-muted mb-4">Founded on the principle of providing uncompromised transparency and exceptional bespoke services, LUXEESTATE has transformed from a boutique regional agency into a multi-market luxury real estate authority.</p>
                    <p class="text-muted mb-4">We believe that purchasing real estate is more than a transaction—it's an intentional curation of lifestyle, legacy, and wealth optimization. Our white-glove advisory methodology pairs discerning international clients with exclusive, off-market architectural landmarks.</p>
                    
                    <div class="row g-3 border-top pt-4">
                        <div class="col-sm-6">
                            <h5 class="fw-bold text-dark mb-1"><i class="bi bi-check2-circle text-primary me-2"></i>$4.2B+ Closed Volume</h5>
                            <p class="text-muted small">Managing elite asset placements seamlessly.</p>
                        </div>
                        <div class="col-sm-6">
                            <h5 class="fw-bold text-dark mb-1"><i class="bi bi-check2-circle text-primary me-2"></i>Global Network</h5>
                            <p class="text-muted small">Connecting premium institutional investors globally.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="position-relative">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" class="img-fluid rounded-4 shadow-lg w-100 object-fit-cover" alt="Luxury Interior" style="height: 450px;">
                        <div class="position-absolute bottom-0 start-0 m-4 bg-primary text-white p-4 rounded-4 shadow-lg max-w-sm d-none d-sm-block" style="width: 260px;">
                            <h3 class="fw-bold display-6 mb-0">14+</h3>
                            <p class="small mb-0 text-white-50">Years of Elite Multi-Market Brokerage Authority</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-5 bg-light">
        <div class="container py-4">
            <div class="text-center mb-5 mx-auto" style="max-width: 600px;">
                <span class="text-primary fw-bold text-uppercase small tracking-wider">Our DNA</span>
                <h2 class="fw-bold text-dark mt-1">The Pillars of Our Success</h2>
                <p class="text-muted">The core foundational values that govern how we interact, advise, and deliver exceptional value on every transaction.</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="bg-white p-4 rounded-4 h-100 shadow-sm transition-up">
                        <div class="bg-primary-subtle text-primary rounded-3 p-3 d-inline-block mb-3">
                            <i class="bi bi-gem fs-3"></i>
                        </div>
                        <h4 class="fw-bold text-dark mb-2">Uncompromising Quality</h4>
                        <p class="text-muted small mb-0">From premium marketing collateral to vetted property lists, we accept nothing short of total corporate perfectionism.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-white p-4 rounded-4 h-100 shadow-sm transition-up">
                        <div class="bg-secondary-subtle text-secondary rounded-3 p-3 d-inline-block mb-3">
                            <i class="bi bi-eye fs-3"></i>
                        </div>
                        <h4 class="fw-bold text-dark mb-2">Absolute Discretion</h4>
                        <p class="text-muted small mb-0">We heavily respect consumer privacy data. High-profile investor profiles remain protected under rigid confidentiality infrastructure.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="bg-white p-4 rounded-4 h-100 shadow-sm transition-up">
                        <div class="bg-success-subtle text-success rounded-3 p-3 d-inline-block mb-3">
                            <i class="bi bi-lightning-charge fs-3"></i>
                        </div>
                        <h4 class="fw-bold text-dark mb-2">Innovative Execution</h4>
                        <p class="text-muted small mb-0">Leveraging real-time valuation matrix tools and immersive panoramic virtualization assets to optimize timelines.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modern Executive Statement Vision Banner -->
    <section class="py-5 bg-dark text-white text-center position-relative overflow-hidden">
        <!-- Background Overlay Image inside code styling -->
        <div class="position-absolute top-0 start-0 w-100 h-100 opacity-25" style="background: url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80') center center/cover;"></div>
        
        <div class="container py-5 position-relative z-1 mx-auto" style="max-width: 800px;">
            <i class="bi bi-quote display-1 text-primary opacity-50 mb-0 d-block"></i>
            <h3 class="fw-light lh-base mb-4 italic">"Luxury is not defined by a price point; it is encapsulated completely by an uncompromised standard of exceptional transactional representation and seamless care."</h3>
            <hr class="w-25 mx-auto border-secondary opacity-50 mb-3">
            <h6 class="text-uppercase tracking-wider fw-bold text-primary mb-1">Executive Advisory Council</h6>
            <p class="text-white-50 small mb-0">LUXEESTATE International Holdings Ltd.</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container pt-4">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h5 class="fw-bold text-primary mb-4">LUXEESTATE</h5>
                    <p class="text-white-50">Providing luxury properties, professional assistance, and exceptional service to turn your real estate dreams into reality.</p>
                    <div class="d-flex gap-3 fs-5 mt-3">
                        <a href="#" class="text-white-50 hover-primary"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white-50 hover-primary"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" class="text-white-50 hover-primary"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white-50 hover-primary"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h6 class="fw-bold text-uppercase tracking-wider mb-4 small">Quick Links</h6>
                    <ul class="list-unstyled text-white-50 d-grid gap-2">
                        <li><a href="#" class="text-decoration-none text-white-50">Properties</a></li>
                        <li><a href="#" class="text-decoration-none text-white-50">About Us</a></li>
                        <li><a href="#" class="text-decoration-none text-white-50">Contact Us</a></li>
                        <li><a href="#" class="text-decoration-none text-white-50">Our Agents</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h6 class="fw-bold text-uppercase tracking-wider mb-4 small">Contact Info</h6>
                    <ul class="list-unstyled text-white-50 d-grid gap-2">
                        <li><i class="bi bi-geo-alt-fill me-2 text-primary"></i> 5th Ave Tower, New York, NY</li>
                        <li><i class="bi bi-telephone-fill me-2 text-primary"></i> +1 (555) 019-2834</li>
                        <li><i class="bi bi-envelope-fill me-2 text-primary"></i> support@luxeestate.com</li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h6 class="fw-bold text-uppercase tracking-wider mb-4 small">Newsletter</h6>
                    <p class="text-white-50 small">Subscribe to get premium property listings updates early.</p>
                    <div class="input-group">
                        <input type="email" class="form-control bg-light-subtle border-0 text-dark" placeholder="Your Email">
                        <button class="btn btn-primary text-white" type="button">Join</button>
                    </div>
                </div>
            </div>
            <hr class="text-secondary my-4 opacity-25">
            <div class="text-center text-white-50 small">
                <p>&copy; 2026 LUXEESTATE. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
}