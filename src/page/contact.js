export function contact() {
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
                    <li class="nav-item"><a class="nav-link px-3" href="about">About</a></li>
                    <li class="nav-item"><a class="nav-link active text-primary px-3" href="contact">Contact</a></li>
                    <li class="nav-item ms-lg-3">
                        <a class="btn btn-primary text-white px-4 rounded-pill shadow-sm" href="#">Add Listing</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Sub-Header Section -->
    <section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;">
        <div class="container py-3">
            <h1 class="display-4 fw-bold mb-2">Connect With Us</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Direct Quick Touchpoints -->
    <section class="py-5 bg-light">
        <div class="container py-2">
            <div class="row g-4 text-center">
                <div class="col-md-4">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                        <div class="bg-primary-subtle text-primary rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="bi bi-telephone fs-4"></i>
                        </div>
                        <h5 class="fw-bold text-dark mb-2">Call Our Office</h5>
                        <p class="text-muted small mb-1">Direct Line: +1 (555) 019-2834</p>
                        <p class="text-muted small mb-0">Toll Free: +1 (800) LUXE-ESTATE</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                        <div class="bg-secondary-subtle text-secondary rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="bi bi-geo-alt fs-4"></i>
                        </div>
                        <h5 class="fw-bold text-dark mb-2">Visit Corporate HQ</h5>
                        <p class="text-muted small mb-1">5th Ave Corporate Tower, Suite 4800</p>
                        <p class="text-muted small mb-0">New York, NY 10017</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-4 bg-white rounded-4 shadow-sm h-100">
                        <div class="bg-success-subtle text-success rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="bi bi-clock fs-4"></i>
                        </div>
                        <h5 class="fw-bold text-dark mb-2">Operational Hours</h5>
                        <p class="text-muted small mb-1">Mon – Fri: 8:00 AM – 6:00 PM</p>
                        <p class="text-muted small mb-0">Sat: 10:00 AM – 4:00 PM (EST)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form & Map Layout -->
    <section class="py-5">
        <div class="container py-2">
            <div class="row g-5">
                <!-- Contact Form Column -->
                <div class="col-lg-7">
                    <span class="text-primary fw-bold text-uppercase small tracking-wider">Inquiries</span>
                    <h2 class="fw-bold text-dark mt-1 mb-3">Send Us A Message</h2>
                    <p class="text-muted mb-4">Have questions regarding a listing or looking to schedule a private architectural showing? Fill out the brief consultation ledger below and an asset expert will reach out within 2 hours.</p>
                    
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Your Name</label>
                                <input type="text" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="John Doe" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Email Address</label>
                                <input type="email" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="john@example.com" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Phone Number</label>
                                <input type="tel" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="+1 (555) 000-0000">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Interested In</label>
                                <select class="form-select bg-light border-0 py-2.5 rounded-3">
                                    <option selected>Buying a Luxury Property</option>
                                    <option>Renting a Luxury Property</option>
                                    <option>Listing/Selling an Asset</option>
                                    <option>General Corporate Advisory</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Your Message</label>
                                <textarea class="form-control bg-light border-0 rounded-3" rows="5" placeholder="Describe your real estate parameters or specific asset requests..." required></textarea>
                            </div>
                            <div class="col-12 mt-4">
                                <button type="submit" class="btn btn-primary text-white fw-semibold px-5 py-2.5 rounded-pill shadow-sm">
                                    Submit Consultation Request
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <!-- Map / Office Presentation Column -->
                <div class="col-lg-5">
                    <div class="bg-light p-2 rounded-4 shadow-sm h-100 overflow-hidden min-vh-400 d-flex flex-column" style="min-height: 400px;">
                        <!-- Styled Map Wrapper Container -->
                        <div class="w-100 h-100 flex-grow-1 rounded-4 overflow-hidden position-relative bg-dark d-flex align-items-center justify-content-center" style="background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80') no-repeat center center/cover;">
                            <div class="bg-white p-4 rounded-4 shadow text-center position-absolute m-3 max-w-xs" style="max-width: 280px; bottom: 10px; left: 10px;">
                                <h6 class="fw-bold text-dark mb-1"><i class="bi bi-building text-primary me-2"></i>LuxeEstate Tower</h6>
                                <p class="text-muted small mb-0 fs-7" style="font-size: 12px;">5th Avenue Block, Floor 48, Manhattan, NY</p>
                            </div>
                            <!-- Icon to add visual focus -->
                            <div class="bg-primary text-white rounded-circle p-3 shadow-lg animation-pulse"><i class="bi bi-geo-alt-fill fs-2"></i></div>
                        </div>
                    </div>
                </div>
            </div>
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