export function agents() {
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
                    <li class="nav-item"><a class="nav-link active text-primary px-3" href="agents">Agents</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="about">About</a></li>
                    <li class="nav-item"><a class="nav-link px-3" href="contact">Contact</a></li>
                    <li class="nav-item ms-lg-3">
                        <a class="btn btn-primary text-white px-4 rounded-pill shadow-sm" href="#">Add Listing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sub-Header Section -->
    <section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;">
        <div class="container py-3">
            <h1 class="display-4 fw-bold mb-2">Our Dedicated Specialists</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Agents</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Filter & Agents Directory Grid -->
    <section class="py-5 bg-light">
        <div class="container py-2">
            
            <!-- Dynamic Agent Search/Filter Bar -->
            <div class="bg-white p-3 rounded-4 shadow-sm mb-5">
                <form class="row g-3 align-items-center">
                    <div class="col-md-5">
                        <div class="input-group">
                            <span class="input-group-text bg-light border-0"><i class="bi bi-search text-muted"></i></span>
                            <input type="text" class="form-control bg-light border-0 py-2" placeholder="Search agent by name...">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <select class="form-select bg-light border-0 py-2">
                            <option selected>All Specialities</option>
                            <option>Luxury Residential</option>
                            <option>Commercial Investments</option>
                            <option>Off-Market Acquisitions</option>
                            <option>Boutique Penthouses</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 text-white fw-semibold">
                            Filter Team
                        </button>
                    </div>
                </form>
            </div>

            <!-- Agents Grid -->
            <div class="row g-4">
                <!-- Agent 1 -->
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover bg-white">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=500&q=80" class="card-img-top object-fit-cover" alt="Marcus Vance" style="height: 300px;">
                            <span class="badge bg-success position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill small">Active Listing Expert</span>
                        </div>
                        <div class="card-body p-4">
                            <h4 class="fw-bold text-dark mb-1">Marcus Vance</h4>
                            <p class="text-primary small fw-semibold mb-3">Principal Broker & Founder</p>
                            <p class="text-muted small mb-4">Over 15 years overseeing luxury commercial buys, securing premium off-market properties for high-profile portfolios.</p>
                            
                            <!-- Micro performance metrics -->
                            <div class="row g-2 text-center bg-light p-3 rounded-3 mb-4">
                                <div class="col-6 border-end">
                                    <div class="fw-bold text-dark">180+</div>
                                    <div class="text-muted small" style="font-size: 11px;">Deals Closed</div>
                                </div>
                                <div class="col-6">
                                    <div class="fw-bold text-dark">15 Yrs</div>
                                    <div class="text-muted small" style="font-size: 11px;">Experience</div>
                                </div>
                            </div>

                            <ul class="list-unstyled small text-muted mb-0 d-grid gap-2 border-top pt-3">
                                <li><i class="bi bi-envelope text-primary me-2"></i> m.vance@luxeestate.com</li>
                                <li><i class="bi bi-telephone text-primary me-2"></i> +1 (555) 019-2834</li>
                            </ul>
                        </div>
                        <div class="card-footer bg-white border-0 px-4 pb-4 pt-0 d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2 fs-5 text-muted">
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-twitter-x"></i></a>
                            </div>
                            <a href="#" class="btn btn-sm btn-outline-primary px-3 rounded-pill">View Profile</a>
                        </div>
                    </div>
                </div>

                <!-- Agent 2 -->
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover bg-white">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=500&q=80" class="card-img-top object-fit-cover" alt="Elena Rostova" style="height: 300px;">
                            <span class="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill small">Top Producer</span>
                        </div>
                        <div class="card-body p-4">
                            <h4 class="fw-bold text-dark mb-1">Elena Rostova</h4>
                            <p class="text-primary small fw-semibold mb-3">Senior Residential Consultant</p>
                            <p class="text-muted small mb-4">Specializes exclusively in high-end metropolitan penthouses and modern waterfront urban structures.</p>
                            
                            <!-- Micro performance metrics -->
                            <div class="row g-2 text-center bg-light p-3 rounded-3 mb-4">
                                <div class="col-6 border-end">
                                    <div class="fw-bold text-dark">95+</div>
                                    <div class="text-muted small" style="font-size: 11px;">Deals Closed</div>
                                </div>
                                <div class="col-6">
                                    <div class="fw-bold text-dark">8 Yrs</div>
                                    <div class="text-muted small" style="font-size: 11px;">Experience</div>
                                </div>
                            </div>

                            <ul class="list-unstyled small text-muted mb-0 d-grid gap-2 border-top pt-3">
                                <li><i class="bi bi-envelope text-primary me-2"></i> e.rostova@luxeestate.com</li>
                                <li><i class="bi bi-telephone text-primary me-2"></i> +1 (555) 019-2877</li>
                            </ul>
                        </div>
                        <div class="card-footer bg-white border-0 px-4 pb-4 pt-0 d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2 fs-5 text-muted">
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-instagram"></i></a>
                            </div>
                            <a href="#" class="btn btn-sm btn-outline-primary px-3 rounded-pill">View Profile</a>
                        </div>
                    </div>
                </div>

                <!-- Agent 3 -->
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover bg-white">
                        <div class="position-relative">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&h=500&q=80" class="card-img-top object-fit-cover" alt="Jonathan Reyes" style="height: 300px;">
                            <span class="badge bg-success position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill small">Villa Specialist</span>
                        </div>
                        <div class="card-body p-4">
                            <h4 class="fw-bold text-dark mb-1">Jonathan Reyes</h4>
                            <p class="text-primary small fw-semibold mb-3">Luxury Villa Consultant</p>
                            <p class="text-muted small mb-4">An expert asset advisor focusing on architectural coastal estates and private suburban sanctuary designs.</p>
                            
                            <!-- Micro performance metrics -->
                            <div class="row g-2 text-center bg-light p-3 rounded-3 mb-4">
                                <div class="col-6 border-end">
                                    <div class="fw-bold text-dark">120+</div>
                                    <div class="text-muted small" style="font-size: 11px;">Deals Closed</div>
                                </div>
                                <div class="col-6">
                                    <div class="fw-bold text-dark">11 Yrs</div>
                                    <div class="text-muted small" style="font-size: 11px;">Experience</div>
                                </div>
                            </div>

                            <ul class="list-unstyled small text-muted mb-0 d-grid gap-2 border-top pt-3">
                                <li><i class="bi bi-envelope text-primary me-2"></i> j.reyes@luxeestate.com</li>
                                <li><i class="bi bi-telephone text-primary me-2"></i> +1 (555) 019-2811</li>
                            </ul>
                        </div>
                        <div class="card-footer bg-white border-0 px-4 pb-4 pt-0 d-flex justify-content-between align-items-center">
                            <div class="d-flex gap-2 fs-5 text-muted">
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-linkedin"></i></a>
                                <a href="#" class="text-muted hover-primary"><i class="bi bi-facebook"></i></a>
                            </div>
                            <a href="#" class="btn btn-sm btn-outline-primary px-3 rounded-pill">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <!-- Recruitment Banner / Call to Action Section -->
    <section class="py-5 bg-primary text-white position-relative overflow-hidden">
        <div class="container py-4 text-center text-lg-start position-relative z-1">
            <div class="row align-items-center g-4">
                <div class="col-lg-8">
                    <h2 class="fw-bold display-6 mb-2">Want to list your elite property portfolio?</h2>
                    <p class="mb-0 text-white-50 fs-5">Get matching consulting assessments directly from our dedicated executive team professionals today.</p>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a href="#" class="btn btn-secondary text-white fw-semibold px-4 py-3 rounded-pill shadow-lg me-sm-2 mb-2 mb-sm-0">Contact Our Office</a>
                    <a href="#" class="btn btn-light text-primary fw-semibold px-4 py-3 rounded-pill shadow-sm">Submit Asset</a>
                </div>
            </div>
        </div>
        <!-- Decorative abstract geometric element background -->
        <div class="position-absolute bg-white opacity-5 rounded-circle" style="width: 400px; height: 400px; top: -50%; right: -10%;"></div>
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