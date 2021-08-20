from django.contrib import admin

from .models import Beverage, Brewery, Check_in

@admin.register(Beverage)
class BeverageAdmin(admin.ModelAdmin):
  list_display = ['name', 'brewery', 'style']

@admin.register(Brewery)
class BreweryAdmin(admin.ModelAdmin):
  list_display = ['name','city','state_code']

@admin.register(Check_in)
class Check_inAdmin(admin.ModelAdmin):
  list_display = ['submission_date','beverage','rating', 'cost']
