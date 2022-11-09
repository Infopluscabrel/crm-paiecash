<template>
     <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <a class="nav-link " href="index.html">
                    <i class="bi bi-grid"></i>
                    <span>Accueil</span>
                </a>
            </li>
            <!-- End Dashboard Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#reseau" role="button">
                    <i class="bi bi-layout-text-window-reverse"></i>
                    <span>Gestion du Reseau</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <div class="collapsed" id="reseau">
                    <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="#">
                                <i class="bi bi-circle"></i>
                                <span>Les Revendeurs
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="tables-general.html">
                                <i class="bi bi-circle"></i>
                                <span>Resultats du réseau</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <!-- End Tables Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#finance" role="button">
                    <i class="bi bi-layout-text-window-reverse"></i>
                    <span>Finances</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <div class="collapsed" id="finance">
                    <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="footballeurs.html">
                                <i class="bi bi-circle"></i>
                                <span>Gains
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="tables-general.html">
                                <i class="bi bi-circle"></i>
                                <span>Resultats par Revendeur</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <!-- End Tables Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#stock" role="button">
                    <i class="bi bi-layout-text-window-reverse"></i>
                    <span>Gestion des Stocks</span>
                    <i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <div id="stock">
                    <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">

                        <li>
                            <a href="ajout-article.html">
                                <i class="bi bi-circle"></i>
                                <span>Articles</span>
                            </a>
                        </li>
                        <li>
                            <a href="stocks-list.html ">
                                <i class="bi bi-circle"></i>
                                <span>Stocks</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <!-- End Tables Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="suivi-commande.html">
                    <i class="bi bi-book"></i>
                    <span>Suivi commande</span>
                </a>
            </li>
            <!-- End suivi commande Nav -->
            <li class="nav-heading">Pages</li>
            <li class="nav-item">
                <a class="nav-link collapsed" href="users-profile.html">
                    <i class="bi bi-person"></i>
                    <span>Profile</span>
                </a>
            </li>
            <!-- End Profile Page Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-faq.html">
                    <i class="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                </a>
            </li>
            <!-- End F.A.Q Page Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-contact.html">
                    <i class="bi bi-envelope"></i>
                    <span>Contact</span>
                </a>
            </li>
            <!-- End Contact Page Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-register.html">
                    <i class="bi bi-card-list"></i>
                    <span>Register</span>
                </a>
            </li>
            <!-- End Register Page Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-login.html">
                    <i class="bi bi-box-arrow-in-right"></i>
                    <span>Login</span>
                </a>
            </li>
            <!-- End Login Page Nav -->

            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-error-404.html">
                    <i class="bi bi-dash-circle"></i>
                    <span>Error 404</span>
                </a>
            </li>
            <!-- End Error 404 Page Nav -->
            <li class="nav-item">
                <a class="nav-link collapsed" href="pages-blank.html">
                    <i class="bi bi-file-earmark"></i>
                    <span>Blank</span>
                </a>
            </li>
            <!-- End Blank Page Nav -->
        </ul>
    </aside>
    <!-- End Sidebar-->
</template>