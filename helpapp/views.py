from django.shortcuts import render
import sys
from django.shortcuts import render
from django.http import HttpResponse
import json
from django.core import serializers
from .models import *
from django.http import JsonResponse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseServerError
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.views.decorators.cache import cache_page
from .firestore import db
import json
from .ResponseModels.help import Help
from .ResponseModels.location import Location
from .ResponseModels.user import User
from .Providers.analysis import Analysis
from .Providers.nearest_facilities import NearestFacilities
from .Providers.obtain_cause_resources import obtain_cause_resources
import uuid
import requests
import json
from rest_framework.views import APIView


# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


class Analyze(APIView):

    def post(self, request):

        # try:

            body = request.data
            description = body.get('description')
            location = body.get('location')

            analysis_results = Analysis(
                description=description).results()

            potential_causes = analysis_results['potential_causes']

            closest_three_facilities = NearestFacilities(
                location=location, potential_causes=potential_causes).obtain_relevent_data()

            help_response = Help(analysis_results=analysis_results, description=description, facilities=closest_three_facilities
                                 )

            resources_response = obtain_cause_resources(potential_causes)
            
            help_response.resources = resources_response.data

            response = help_response.to_dict()

            return JsonResponse(response)

        # except Exception as e:
        #     return HttpResponseServerError()
