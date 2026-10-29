from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название ресторана")

    def __str__(self):
        return self.name

class Dish(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='dishes', verbose_name="Ресторан")
    title = models.CharField(max_length=255, verbose_name="Название блюда")
    description = models.TextField(blank=True, verbose_name="Описание")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    image_name = models.CharField(max_length=100, blank=True, null=True, verbose_name="Имя файла картинки")
    def __str__(self):
        return self.title
