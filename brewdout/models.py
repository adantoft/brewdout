from django.db import models

class Brewery(models.Model):
  name = models.CharField(max_length=100)
  city = models.CharField(max_length=30)
  state_code = models.CharField(max_length=2) #todo make this dropdown
  country = models.CharField(max_length=30, default='USA') #todo make this better list

  def __str__(self):
    return self.name

class Beverage(models.Model):
  name = models.CharField(max_length=100)
  brewery = models.ForeignKey(Brewery, on_delete=models.PROTECT)
  style = models.CharField(max_length=100) #todo make this dropdown

  def __str__(self):
    return self.name

class Check_in(models.Model):
  RATING_CHOICES = [(1,'Bad'),(2,'Meh'),(3,'Good'),(4,'Great'),(5,'Phenomenal')]
  COST_CHOICES = [(1,'$'),(2,'$$'),(3,'$$$'),(4,'$$$$'),(5,'$$$$$')] #todo add explaination values to form
  #who todo implement when understanding users better
  beverage = models.ForeignKey(Beverage, on_delete=models.PROTECT) #todo make dropdown
  submission_date = models.DateTimeField()
  rating = models.CharField(max_length=10, choices=RATING_CHOICES)
  cost = models.CharField(max_length=5, choices=COST_CHOICES)
  tasting_notes = models.CharField(max_length=1000)
  
