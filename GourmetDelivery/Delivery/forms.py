from django import forms
from .models import Dish

class DishForm(forms.ModelForm):
    class Meta:
        model = Dish
        fields = ['restaurant', 'title', 'description', 'price','image_name']
        
    def clean_price(self):
        price = self.cleaned_data.get('price')
        if price is not None and price <= 0:
            raise forms.ValidationError("Цена должна быть больше нуля!")
        return price
