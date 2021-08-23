from django.shortcuts import render, resolve_url
from django.http import Http404

from .models import Beverage, Check_in

def home(request):
  beverages = Beverage.objects.all()
  check_ins = Check_in.objects.all()
  return render(request, 'home.html', {
    'beverages': beverages,
    'check_ins': check_ins
  })

def beverage_detail(request, beverage_id):
  try:
      beverage = Beverage.objects.get(id=beverage_id)
  except Beverage.DoesNotExist:
    raise Http404('beverage not found')
  return render(request, 'beverage_detail.html', {
    'beverage': beverage,
  })
  return HttpResponse(f'<p> beverage_detail view with id {beverage_id}<p>')