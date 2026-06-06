export function properties() {
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
                    <li class="nav-item"><a class="nav-link px-3" href="#">Home</a></li>
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

    <!-- Sub-Header / Breadcrumb Section -->
    <section class="py-5 bg-dark text-white text-center position-relative" style="background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80') no-repeat center center/cover;">
        <div class="container py-3">
            <h1 class="display-4 fw-bold mb-2">Our Properties</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">Properties</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Main Properties Content Area -->
    <section class="py-5 bg-light">
        <div class="container py-2">
            <div class="row g-4">
                
                <!-- Left Sidebar Filters -->
                <div class="col-lg-4">
                    <div class="bg-white p-4 rounded-4 shadow-sm position-sticky" style="top: 100px;">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="fw-bold text-dark mb-0"><i class="bi bi-filter-square me-2 text-primary"></i>Filter Properties</h5>
                            <a href="#" class="text-decoration-none text-muted small hover-primary">Reset All</a>
                        </div>
                        
                        <form>
                            <!-- Search Field -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Keyword</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-0"><i class="bi bi-search text-muted"></i></span>
                                    <input type="text" class="form-control bg-light border-0 py-2" placeholder="e.g. pool, modern, beachfront">
                                </div>
                            </div>

                            <!-- Location Select -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Location</label>
                                <select class="form-select bg-light border-0 py-2">
                                    <option selected>All Locations</option>
                                    <option>Malibu, CA</option>
                                    <option>New York, NY</option>
                                    <option>Austin, TX</option>
                                    <option>Miami, FL</option>
                                </select>
                            </div>

                            <!-- Property Status -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Status</label>
                                <div class="d-flex gap-2">
                                    <input type="radio" class="btn-check" name="status" id="statusAny" checked>
                                    <label class="btn btn-outline-primary rounded-pill flex-fill small" for="statusAny">Any</label>
                                    
                                    <input type="radio" class="btn-check" name="status" id="statusSale">
                                    <label class="btn btn-outline-primary rounded-pill flex-fill small" for="statusSale">Buy</label>
                                    
                                    <input type="radio" class="btn-check" name="status" id="statusRent">
                                    <label class="btn btn-outline-primary rounded-pill flex-fill small" for="statusRent">Rent</label>
                                </div>
                            </div>

                            <!-- Type Select -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Property Type</label>
                                <select class="form-select bg-light border-0 py-2">
                                    <option selected>All Types</option>
                                    <option>Modern Villa</option>
                                    <option>Apartment</option>
                                    <option>Penthouse</option>
                                    <option>Townhouse</option>
                                </select>
                            </div>

                            <!-- Rooms/Beds Count -->
                            <div class="mb-4">
                                <label class="form-label fw-semibold text-muted small text-uppercase">Bedrooms</label>
                                <select class="form-select bg-light border-0 py-2">
                                    <option selected>Any Count</option>
                                    <option>1+ Bed</option>
                                    <option>2+ Beds</option>
                                    <option>3+ Beds</option>
                                    <option>4+ Beds</option>
                                </select>
                            </div>

                            <!-- Apply Button -->
                            <button type="submit" class="btn btn-primary w-100 py-2 rounded-3 text-white fw-semibold shadow-sm">
                                Apply Filter Options
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Right Listings Grid -->
                <div class="col-lg-8">
                    <!-- Sorting and Result Header -->
                    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center bg-white p-3 rounded-4 shadow-sm mb-4 g-3">
                        <div class="text-muted small">
                            Showing <span class="text-dark fw-bold">1–6</span> of <span class="text-dark fw-bold">24</span> Luxury Assets
                        </div>
                        <div class="d-flex align-items-center gap-2 mt-2 mt-sm-0">
                            <span class="text-muted small text-nowrap">Sort By:</span>
                            <select class="form-select form-select-sm border-0 bg-light fw-semibold text-dark">
                                <option selected>Latest Listings</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Most Popular</option>
                            </select>
                        </div>
                    </div>

                    <!-- Grid Items Loop -->
                    <div class="row g-4">
                        <!-- Property 1 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Luxury Villa" style="height: 220px;">
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

                        <!-- Property 2 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Modern Penthouse" style="height: 220px;">
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

                        <!-- Property 3 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Contemporary House" style="height: 220px;">
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

                        <!-- Property 4 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Luxury Mansion" style="height: 220px;">
                                    <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Sale</span>
                                    <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$5,400,000</span>
                                </div>
                                <div class="card-body p-4">
                                    <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Elite Mansion</p>
                                    <h5 class="card-title fw-bold text-dark mb-2">The Whispering Palms Oasis</h5>
                                    <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 110 Ocean Dr, Miami, FL</p>
                                    <hr class="text-muted my-3 opacity-25">
                                    <div class="d-flex justify-content-between text-muted small">
                                        <span><i class="bi bi-bed me-1 text-primary"></i> 6 Beds</span>
                                        <span><i class="bi bi-droplet me-1 text-primary"></i> 7 Baths</span>
                                        <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 7,100 SqFt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Property 5 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Loft" style="height: 220px;">
                                    <span class="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Rent</span>
                                    <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$3,800/mo</span>
                                </div>
                                <div class="card-body p-4">
                                    <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Industrial Loft</p>
                                    <h5 class="card-title fw-bold text-dark mb-2">Brickstone Industrial Loft</h5>
                                    <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 404 Broadway St, New York, NY</p>
                                    <hr class="text-muted my-3 opacity-25">
                                    <div class="d-flex justify-content-between text-muted small">
                                        <span><i class="bi bi-bed me-1 text-primary"></i> 1 Bed</span>
                                        <span><i class="bi bi-droplet me-1 text-primary"></i> 2 Baths</span>
                                        <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 1,200 SqFt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Property 6 -->
                        <div class="col-md-6">
                            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                                <div class="position-relative">
                                    <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80" class="card-img-top object-fit-cover" alt="Modern Townhouse" style="height: 220px;">
                                    <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">For Sale</span>
                                    <span class="badge bg-dark position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 fw-bold">$640,000</span>
                                </div>
                                <div class="card-body p-4">
                                    <p class="text-primary small fw-semibold mb-2"><i class="bi bi-tag-fill me-1"></i> Townhouse</p>
                                    <h5 class="card-title fw-bold text-dark mb-2">Emerald Greens Rowhouse</h5>
                                    <p class="card-text text-muted small mb-3"><i class="bi bi-geo-alt me-1"></i> 78 Parkside Ave, Austin, TX</p>
                                    <hr class="text-muted my-3 opacity-25">
                                    <div class="d-flex justify-content-between text-muted small">
                                        <span><i class="bi bi-bed me-1 text-primary"></i> 3 Beds</span>
                                        <span><i class="bi bi-droplet me-1 text-primary"></i> 3 Baths</span>
                                        <span><i class="bi bi-arrows-fullscreen me-1 text-primary"></i> 1,980 SqFt</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Clean Pagination Area -->
                    <nav class="mt-5">
                        <ul class="pagination justify-content-center border-0 gap-2">
                            <li class="page-item disabled">
                                <a class="page-link rounded-circle border-0 bg-white shadow-sm d-flex align-items-center justify-content-center" style="width:40px; height:40px;" href="#" tabindex="-1"><i class="bi bi-chevron-left"></i></a>
                            </li>
                            <li class="page-item active"><a class="page-link rounded-circle border-0 shadow-sm text-center" style="width:40px; height:40px; line-height:24px;" href="#">1</a></li>
                            <li class="page-item"><a class="page-link rounded-circle border-0 bg-white shadow-sm text-dark text-center" style="width:40px; height:40px; line-height:24px;" href="#">2</a></li>
                            <li class="page-item"><a class="page-link rounded-circle border-0 bg-white shadow-sm text-dark text-center" style="width:40px; height:40px; line-height:24px;" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link rounded-circle border-0 bg-white shadow-sm text-dark d-flex align-items-center justify-content-center" style="width:40px; height:40px;" href="#"><i class="bi bi-chevron-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                    
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