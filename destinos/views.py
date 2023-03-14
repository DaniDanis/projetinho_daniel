import json

from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import render

from destinos.models import Atrativos


# Create your views here.
def list(request):
    form = json.loads(request.body)
    atrativos = Atrativos.objects.filter(
        Q(clima=form["clima"]) | Q(tipo_turismo=form["tipo_turismo"])
    )
    ranking = 0
    destinos_alternativos = []
    destinos_perfeitos = []
    for atrativo in atrativos:
        destino = {
            "nome": atrativo.nome,
            "imagem": atrativo.imagem,
            "tipo_turismo": atrativo.tipo_turismo,
            "clima": atrativo.clima,
        }
        if atrativo.clima == form["clima"]:
            ranking += 1
        if atrativo.tipo_turismo == form["tipo_turismo"]:
            ranking += 1
        if ranking == 2:
            destinos_perfeitos.append(destino)
        else:
            destinos_alternativos.append(destino)
        ranking = 0
    return JsonResponse(
        {
            "destinos_alternativos": destinos_alternativos,
            "destinos_perfeitos": destinos_perfeitos,
        },
        safe=False,
    )
