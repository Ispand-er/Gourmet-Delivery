from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('catalog/', views.catalog_view, name='catalog'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('dish/add/', views.dish_create_view, name='dish_create'),
    path('dish/<int:id>/', views.dish_detail_view, name='dish_detail'),
    path('dish/<int:id>/edit/', views.dish_update_view, name='dish_edit'),
    path('dish/<int:id>/delete/', views.dish_delete_view, name='dish_delete'),
]
