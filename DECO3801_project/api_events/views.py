from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Session
from .serializers import *

from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class SessionView(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)




@api_view(['GET'])
def showAllSessions(request):

    sessions = Session.objects.all()
    serilizer = SessionSerializer(sessions, many=True)
    return Response(serilizer.data)


@api_view(['GET'])
def showSingleSession(request, pk):

    session = Session.objects.get(id=pk)
    serilizer = SessionSerializer(session, many=False)
    return Response(serilizer.data)

@api_view(['POST'])
def addSession(request):
    serilizer = SessionSerializer(data=request.data)

    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)


@api_view(['PUT'])
def updateSession(request, pk):
    session = Session.objects.get(id=pk)
    serilizer = SessionSerializer(instance=session, data=request.data)

    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)


@api_view(['DELETE'])
def deleteSession(request, pk):
    session = Session.objects.get(id=pk)
    session.delete()

    return Response('Session delete successfully!')
