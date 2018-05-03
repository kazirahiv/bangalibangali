from django.shortcuts import render
from bangu.pyavrophonetic import avro
from django.http import JsonResponse
# Create your views here.


def index(request):
		return render(request, 'bangu/index.html')

def parse(request):
	ar = []
	text = request.GET.get('tx', '')
	data = {
		'parsed': avro.parse(text)
	}
	return JsonResponse(data)


