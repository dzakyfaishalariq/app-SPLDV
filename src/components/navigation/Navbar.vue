<template>
    <nav class="navbar navbar-expand-lg bg-navbar">
        <div class="container-fluid">
            <a class="navbar-brand text-white judul-navbar" href="#"><strong>APP SPLDV</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link text-white tombol-navbar active">
                            <strong>Home</strong>
                        </router-link>
                        <!-- <a class="nav-link text-white tombol-navbar active" aria-current="page" href="#">
                            <strong>Home</strong>
                        </a> -->
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'calculate'}" class="nav-link tombol-navbar text-white"><strong>Calculate</strong></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style>
.bg-navbar {
    background-color: #545B77;
}

.tombol-navbar {
    color: #ffffff !important;
}

.tombol-navbar:hover {
    color: #F29727 !important;
    border-bottom: 2px solid #F29727 !important;
}

.judul-navbar {
    color: #ffffff !important;
}

.judul-navbar:hover {
    color: #F29727 !important;
}
</style>