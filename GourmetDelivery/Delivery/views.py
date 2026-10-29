from django.shortcuts import render, get_object_or_404, redirect
from .models import Dish, Restaurant
from .forms import DishForm

def index_view(request):
    return render(request, 'Delivery/index.html')

def login_view(request):
    return render(request, 'Delivery/login.html')

def register_view(request):
    return render(request, 'Delivery/register.html')

def catalog_view(request):
    dishes = Dish.objects.all()
    return render(request, 'Delivery/catalog.html', {'dishes': dishes})

def dish_detail_view(request, id):
    dish = get_object_or_404(Dish, id=id)
    return render(request, 'Delivery/dish_detail.html', {'dish': dish})

def dish_create_view(request):
    if request.method == 'POST':
        form = DishForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('catalog')
    else:
        form = DishForm()
    return render(request, 'Delivery/dish_form.html', {'form': form, 'action_title': 'Добавить блюдо'})

def dish_update_view(request, id):
    dish = get_object_or_404(Dish, id=id)
    if request.method == 'POST':
        form = DishForm(request.POST, instance=dish)
        if form.is_valid():
            form.save()
            return redirect('dish_detail', id=dish.id)
    else:
        form = DishForm(instance=dish)
    return render(request, 'Delivery/dish_form.html', {'form': form, 'action_title': 'Редактировать блюдо'})

def dish_delete_view(request, id):
    dish = get_object_or_404(Dish, id=id)
    if request.method == 'POST':
        dish.delete()
        return redirect('catalog')
    return render(request, 'Delivery/dish_confirm_delete.html', {'dish': dish})
