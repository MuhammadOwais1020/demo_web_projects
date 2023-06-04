from django.shortcuts import render
from django.http import JsonResponse
from .models import Student
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def home(request):
    return render(request, "index.html")


@csrf_exempt
def addstudent(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        age = request.POST.get('age')
        email = request.POST.get('email')
        phone = request.POST.get('phone')

        student = Student(name=name, age=age, email=email, phone=phone)
        student.save()

        return JsonResponse({'message': 'Student information saved successfully.'})

    return JsonResponse({'error': 'Error when added student information.'})


@csrf_exempt
def get_student_data(request):
    students = Student.objects.all()

    # Serialize the student data
    data = []
    for student in students:
        data.append({
            'name': student.name,
            'age': student.age,
            'email': student.email,
            'phone': student.phone
        })

    return JsonResponse({'students': data})
