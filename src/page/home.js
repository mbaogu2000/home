export function home() {
    return /*html*/`
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
                    <li class="nav-item"><a class="nav-link active text-primary" href="home">Home</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="properties">Properties</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="agents">Agents</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="about">About</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="contact">Contact</a></li>
                    <li class="nav-item ms-lg-3">
                        <a class="btn btn-primary text-white px-4 rounded-pill shadow-sm" href="listing">Add Listing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="position-relative bg-dark text-white d-flex align-items-center" style="min-height: 80vh; background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center mb-5">
                    <span class="badge bg-secondary text-uppercase px-3 py-2 mb-3 tracking-wider rounded-pill">Premium Real Estate</span>
                    <h1 class="display-3 fw-bold mb-3 tracking-tight">Find Your Ultimate Dream Home</h1>
                    <p class="lead text-white-50 fs-4">Discover exclusive luxury properties tailored perfectly to your lifestyle.</p>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="bg-white p-4 rounded-4 shadow-lg text-dark">
                        <ul class="nav nav-pills mb-3 border-bottom pb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active rounded-pill px-4 me-2" data-bs-toggle="pill" type="button">Buy Property</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link rounded-pill px-4" data-bs-toggle="pill" type="button">Rent Property</button>
                            </li>
                        </ul>
                        <form class="row g-3 align-items-end">
                            <div class="col-md-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Location</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-0"><i class="bi bi-geo-alt text-primary"></i></span>
                                    <input type="text" class="form-control bg-light border-0 py-2" placeholder="Enter city, neighborhood...">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Property Type</label>
                                <select class="form-select bg-light border-0 py-2">
                                    <option selected>All Types</option>
                                    <option>Modern Villa</option>
                                    <option>Apartment</option>
                                    <option>Penthouse</option>
                                    <option>Townhouse</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Price Range</label>
                                <select class="form-select bg-light border-0 py-2">
                                    <option selected>Any Price</option>
                                    <option>$100k - $500k</option>
                                    <option>$500k - $1M</option>
                                    <option>$1M - $5M</option>
                                    <option>$5M+</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 text-white fw-semibold">
                                    <i class="bi bi-search me-2"></i>Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="py-5 bg-light">
        <div class="container py-4">
            <div class="text-center mb-5">
                <h2 class="fw-bold text-dark">Explore by Property Type</h2>
                <p class="text-muted">Find exactly what you are looking for right from the start</p>
            </div>
            <div class="row g-4 text-center">
                <div class="col-6 col-md-3">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100 transition-up">
                        <div class="bg-primary-subtle text-primary rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                            <i class="bi bi-house-door fs-3"></i>
                        </div>
                        <h5 class="fw-bold mb-1">Houses</h5>
                        <p class="text-muted small mb-0">124 Listings</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100 transition-up">
                        <div class="bg-secondary-subtle text-secondary rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                            <i class="bi bi-building fs-3"></i>
                        </div>
                        <h5 class="fw-bold mb-1">Apartments</h5>
                        <p class="text-muted small mb-0">85 Listings</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100 transition-up">
                        <div class="bg-success-subtle text-success rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                            <i class="bi bi-building-gear fs-3"></i>
                        </div>
                        <h5 class="fw-bold mb-1">Villas</h5>
                        <p class="text-muted small mb-0">42 Listings</p>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100 transition-up">
                        <div class="bg-warning-subtle text-warning rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                            <i class="bi bi-shop fs-3"></i>
                        </div>
                        <h5 class="fw-bold mb-1">Commercial</h5>
                        <p class="text-muted small mb-0">19 Listings</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container py-4">
            <div class="d-flex justify-content-between align-items-end mb-5">
                <div>
                    <span class="text-primary fw-bold text-uppercase small tracking-wider">Our Picks</span>
                    <h2 class="fw-bold text-dark mb-0">Featured Properties</h2>
                </div>
                <a href="#" class="btn btn-outline-primary rounded-pill px-4 d-none d-sm-block">View All Properties</a>
            </div>
            
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Luxury Villa" style="height: 240px;">
                            <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Sale</span>
                            <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$1,250,000</span>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Modern Villa</p>
                            <h5 class="card-title fw-bold text-dark mb-2">The Grand Horizon Estate</h5>
                            <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 452 Ocean Drive, Malibu, CA</p>
                            <hr class="text-muted my-3 opacity-25">
                            <div class="d-flex justify-content-between text-muted small">
                                <span><i class="bi bi-bed me-1 text-primary"></i> 4 Beds</span>
                                <span><i class="bi bi-droplet me-1 text-primary"></i> 5 Baths</span>
                                <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 3,800 SqFt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Modern Penthouse" style="height: 240px;">
                            <span class="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Rent</span>
                            <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$4,500/mo</span>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Penthouse</p>
                            <h5 class="card-title fw-bold text-dark mb-2">Skyline Heights Penthouse</h5>
                            <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 789 5th Avenue, New York, NY</p>
                            <hr class="text-muted my-3 opacity-25">
                            <div class="d-flex justify-content-between text-muted small">
                                <span><i class="bi bi-bed me-1 text-primary"></i> 2 Beds</span>
                                <span><i class="bi bi-droplet me-1 text-primary"></i> 2 Baths</span>
                                <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 1,650 SqFt</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Contemporary House" style="height: 240px;">
                            <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Sale</span>
                            <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$895,000</span>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Contemporary House</p>
                            <h5 class="card-title fw-bold text-dark mb-2">Serene Woods Contemporary</h5>
                            <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 124 Pinecrest Way, Austin, TX</p>
                            <hr class="text-muted my-3 opacity-25">
                            <div class="d-flex justify-content-between text-muted small">
                                <span><i class="bi bi-bed me-1 text-primary"></i> 3 Beds</span>
                                <span><i class="bi bi-droplet me-1 text-primary"></i> 3 Baths</span>
                                <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 2,400 SqFt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 bg-light">
        <div class="container py-4">
            <div class="row align-items-center g-5">
                <div class="col-lg-5">
                    <span class="text-primary fw-bold text-uppercase small tracking-wider">Our Value</span>
                    <h2 class="fw-bold text-dark mb-3 mt-1">Why Choose LUXEESTATE?</h2>
                    <p class="text-muted mb-4">We redefine the real estate experience by combining cutting-edge market insight with uncompromised white-glove client attention.</p>
                    <div class="d-flex align-items-center p-3 bg-white rounded-4 shadow-sm mb-3">
                        <div class="bg-primary text-white rounded-3 p-3 me-3"><i class="bi bi-shield-check fs-4"></i></div>
                        <div>
                            <h6 class="fw-bold mb-1">100% Secure Transactions</h6>
                            <p class="text-muted small mb-0">Full compliance legal guidance at every single phase.</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center p-3 bg-white rounded-4 shadow-sm">
                        <div class="bg-secondary text-white rounded-3 p-3 me-3"><i class="bi bi-clock-history fs-4"></i></div>
                        <div>
                            <h6 class="fw-bold mb-1">24/7 Premium Concierge</h6>
                            <p class="text-muted small mb-0">Your dedicated asset support advisors are always reachable.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <div class="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-primary border-4">
                                <i class="bi bi-graph-up-arrow text-primary fs-2 mb-2 d-block"></i>
                                <h5 class="fw-bold text-dark">Market Analytics</h5>
                                <p class="text-muted small mb-0">Get instant data-driven asset valuations to optimize investment yields effectively.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-secondary border-4">
                                <i class="bi bi-award text-secondary fs-2 mb-2 d-block"></i>
                                <h5 class="fw-bold text-dark">Awarded Agency</h5>
                                <p class="text-muted small mb-0">Recognized globally as a premier provider of boutique enterprise luxury residential assets.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="bg-white p-4 rounded-4 shadow-sm h-100">
                                <h3 class="display-5 fw-bold text-primary mb-1">12K+</h3>
                                <h6 class="fw-bold text-dark">Properties Moved</h6>
                                <p class="text-muted small mb-0">Successfully brokered and closed keys for high-net-worth portfolios worldwide.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="bg-white p-4 rounded-4 shadow-sm h-100">
                                <h3 class="display-5 fw-bold text-secondary mb-1">99.4%</h3>
                                <h6 class="fw-bold text-dark">Client Satisfaction</h6>
                                <p class="text-muted small mb-0">Verified 5-star reviews validating transactional precision and transparency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5">
        <div class="container py-4">
            <div class="text-center mb-5">
                <span class="text-primary fw-bold text-uppercase small tracking-wider">Expert Team</span>
                <h2 class="fw-bold text-dark mt-1">Meet Our Dedicated Professionals</h2>
                <p class="text-muted">Work alongside experienced, local specialists committed to your ultimate success</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden card-hover text-center p-4 bg-white">
                        <div class="position-relative d-inline-block mx-auto mb-3">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80" class="rounded-circle object-fit-cover shadow" alt="Agent 1" style="width: 140px; height: 140px;">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-white border-2 rounded-circle p-2" title="Available Now"></span>
                        </div>
                        <h5 class="fw-bold text-dark mb-1">Marcus Vance</h5>
                        <p class="text-primary small fw-semibold mb-3">Principal Broker & Founder</p>
                        <p class="text-muted small px-2">Over 15 years overseeing luxury commercial and estate buyouts throughout coastal CA zones.</p>
                        <div class="d-flex justify-content-center gap-3 fs-5 mt-2 border-top pt-3 text-muted">
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-envelope"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-telephone"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden card-hover text-center p-4 bg-white">
                        <div class="position-relative d-inline-block mx-auto mb-3">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80" class="rounded-circle object-fit-cover shadow" alt="Agent 2" style="width: 140px; height: 140px;">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-white border-2 rounded-circle p-2" title="Available Now"></span>
                        </div>
                        <h5 class="fw-bold text-dark mb-1">Elena Rostova</h5>
                        <p class="text-primary small fw-semibold mb-3">Senior Residential Consultant</p>
                        <p class="text-muted small px-2">Specializes exclusively in high-end urban high-rises, lofts, and premium penthouses.</p>
                        <div class="d-flex justify-content-center gap-3 fs-5 mt-2 border-top pt-3 text-muted">
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-envelope"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-telephone"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mx-auto">
                    <div class="card border-0 shadow-sm rounded-4 overflow-hidden card-hover text-center p-4 bg-white">
                        <div class="position-relative d-inline-block mx-auto mb-3">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80" class="rounded-circle object-fit-cover shadow" alt="Agent 3" style="width: 140px; height: 140px;">
                            <span class="position-absolute bottom-0 end-0 bg-success border border-white border-2 rounded-circle p-2" title="Available Now"></span>
                        </div>
                        <h5 class="fw-bold text-dark mb-1">Jonathan Reyes</h5>
                        <p class="text-primary small fw-semibold mb-3">Luxury Villa Consultant</p>
                        <p class="text-muted small px-2">An expert negotiator optimizing off-market structural deals for elite private investors.</p>
                        <div class="d-flex justify-content-center gap-3 fs-5 mt-2 border-top pt-3 text-muted">
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-envelope"></i></a>
                            <a href="#" class="text-muted hover-primary"><i class="bi bi-telephone"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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