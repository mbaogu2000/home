export function listing() {
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
                    <li class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold align-items-center">
                    <li class="nav-item"><a class="nav-link px-3" href="home">Home</a></li>
                    <li class="nav-item"><a class="nav-link active text-primary px-3" href="properties">Properties</a></li>
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

    <!-- Luxury Showcase Gallery Layout -->
    <section class="bg-dark text-white overflow-hidden">
        <div class="container-fluid p-0">
            <div class="row g-1">
                <!-- Large Feature Image -->
                <div class="col-lg-8">
                    <div class="position-relative overflow-hidden" style="height: 550px;">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80" class="w-100 h-100 object-fit-cover" alt="The Grand Horizon Estate Main View">
                        <span class="badge bg-success position-absolute top-0 start-0 m-4 px-3 py-2 rounded-pill fs-6">For Sale</span>
                    </div>
                </div>
                <!-- Mini Secondary Feature Stack -->
                <div class="col-lg-4 d-none d-lg-block">
                    <div class="d-grid gap-1 h-100">
                        <div style="height: 273px; overflow:hidden;">
                            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80" class="w-100 h-100 object-fit-cover" alt="Interior View">
                        </div>
                        <div style="height: 273px; overflow:hidden;">
                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" class="w-100 h-100 object-fit-cover" alt="Poolside View">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Listing Detail Infrastructure -->
    <section class="py-5 bg-light">
        <div class="container py-2">
            <div class="row g-4">
                
                <!-- Main Description Column Left -->
                <div class="col-lg-8">
                    <!-- Title & Header Data Card -->
                    <div class="bg-white p-4 rounded-4 shadow-sm mb-4">
                        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-3 gap-3">
                            <div>
                                <span class="badge bg-primary-subtle text-primary text-uppercase mb-2 px-3 py-1.5 rounded-pill small fw-bold">Premium Modern Villa</span>
                                <h1 class="fw-bold text-dark mb-2 h2">The Grand Horizon Estate</h1>
                                <p class="text-muted mb-0"><i class="bi bi-geo-alt-fill text-primary me-2"></i>452 Ocean Drive, Malibu, CA 90265</p>
                            </div>
                            <div class="text-md-end">
                                <span class="text-muted d-block small text-uppercase fw-semibold mb-1">Asking Price</span>
                                <h2 class="fw-bold text-primary mb-0">$1,250,000</h2>
                                <span class="text-muted small">$328 / SqFt</span>
                            </div>
                        </div>

                        <!-- Core Specs Matrix Strip -->
                        <div class="row g-3 text-center border-top mt-4 pt-3 text-muted">
                            <div class="col-4 col-sm-2 border-end">
                                <i class="bi bi-bed text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">4 Bedrooms</span>
                            </div>
                            <div class="col-4 col-sm-2 border-end">
                                <i class="bi bi-droplet text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">5 Bathrooms</span>
                            </div>
                            <div class="col-4 col-sm-2 border-end-sm">
                                <i class="bi bi-arrows-fullscreen text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">3,800 SqFt</span>
                            </div>
                            <div class="col-4 col-sm-2 border-end mt-3 mt-sm-0">
                                <i class="bi bi-car-front text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">2 Garages</span>
                            </div>
                            <div class="col-4 col-sm-2 border-end mt-3 mt-sm-0">
                                <i class="bi bi-calendar-check text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">Built 2021</span>
                            </div>
                            <div class="col-4 col-sm-2 mt-3 mt-sm-0">
                                <i class="bi bi-heart text-primary fs-4 d-block mb-1"></i>
                                <span class="fw-bold text-dark small d-block">42 Saves</span>
                            </div>
                        </div>
                    </div>

                    <!-- Narrative Overview Card -->
                    <div class="bg-white p-4 rounded-4 shadow-sm mb-4">
                        <h4 class="fw-bold text-dark mb-3">Property Overview</h4>
                        <p class="text-muted">Boasting unmatched panoramic vistas across the coastal horizons of Malibu, The Grand Horizon Estate perfectly integrates mid-century minimalism with high-end modern functionality. Floor-to-ceiling retractable structural glass opens out effortlessly into an expansive sun deck, offering seamless transition to a heated saltwater pool and private spa infrastructure.</p>
                        <p class="text-muted mb-0">The western wing contains an isolated primary suite completed with customized smart ambient lighting matrixes, an integrated boutique walk-in master locker, and an authentic imported marble soaking bathroom module. Ideal for collectors and elite hosts seeking absolute structural privacy.</p>
                    </div>

                    <!-- Amenities Grid Checklist -->
                    <div class="bg-white p-4 rounded-4 shadow-sm mb-4">
                        <h4 class="fw-bold text-dark mb-3">Premium Amenities</h4>
                        <div class="row g-3">
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Saltwater Infinity Pool</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Smart Automation Center</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Private Wine Cellar</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> EV Charging Stations</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Home Cinema Theater</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Professional Chef Kitchen</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Dedicated Security Office</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Solar Power Infrastructure</div>
                            <div class="col-sm-4 col-6"><i class="bi bi-check-circle-fill text-primary me-2"></i> Panoramic Rooftop Deck</div>
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar Sticky Action Column -->
                <div class="col-lg-4">
                    <div class="bg-white p-4 rounded-4 shadow-sm position-sticky" style="top: 100px;">
                        
                        <!-- Assigned Specialist Mini Profile -->
                        <div class="text-center pb-4 border-bottom mb-4">
                            <div class="position-relative d-inline-block mb-3">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80" class="rounded-circle object-fit-cover shadow" alt="Marcus Vance" style="width: 90px; height: 90px;">
                                <span class="position-absolute bottom-0 end-0 bg-success border border-white border-2 rounded-circle p-1.5" title="Agent Online Now"></span>
                            </div>
                            <h5 class="fw-bold text-dark mb-1">Marcus Vance</h5>
                            <p class="text-primary small fw-semibold mb-0">Listing Agent & Asset Broker</p>
                            <span class="text-muted small fs-7 d-block mt-1"><i class="bi bi-award text-secondary me-1"></i> 15 Years Malibu Authority</span>
                        </div>

                        <!-- Direct Tour Booking Inquire Form -->
                        <h6 class="fw-bold text-dark mb-3"><i class="bi bi-envelope-open me-2 text-primary"></i>Request Private Showing</h6>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="Your Name" required>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="Email Address" required>
                            </div>
                            <div class="mb-3">
                                <input type="tel" class="form-control bg-light border-0 py-2.5 rounded-3" placeholder="Phone Number">
                            </div>
                            <div class="mb-4">
                                <textarea class="form-control bg-light border-0 rounded-3" rows="4" required>Hello Marcus, I am interested in scheduling a private architectural tour of The Grand Horizon Estate (Listing ID: #LX-90265). Please advise on current availability options.</textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 py-3 rounded-pill text-white fw-semibold shadow-sm mb-2">
                                <i class="bi bi-chat-left-dots me-2"></i>Send Secure Request
                            </button>
                            <a href="tel:+15550192834" class="btn btn-outline-secondary w-100 py-2.5 rounded-pill fw-semibold small">
                                <i class="bi bi-telephone me-2"></i>Call Direct: (555) 019-2834
                            </a>
                        </form>
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