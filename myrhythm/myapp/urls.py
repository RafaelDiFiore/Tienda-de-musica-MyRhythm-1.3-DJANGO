from django.urls import path
from .views import (
    home, guitarras, baterias, login_view, register_view, logout_view
)

urlpatterns = [
    path('', home, name='home'),
    path('guitarras/', guitarras, name='guitarras'),
    path('baterias/', baterias, name='baterias'),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
    path('logout/', logout_view, name='logout'),
]
