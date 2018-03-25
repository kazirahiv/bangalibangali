from django.shortcuts import render
from bangu.pyavrophonetic import avro
# Create your views here.


def index(request):
	if request.method == "POST":
		text = request.POST.get('text', '')
		print(text)
		aa = avro.parse(text)
		return render(request, 'bangu/result.html', {'aa':aa})
	else:	
		return render(request, 'bangu/index.html')