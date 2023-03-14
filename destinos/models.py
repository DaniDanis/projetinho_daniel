from django.db import models


# Create your models here.
class Atrativos(models.Model):
    class Clima(models.TextChoices):
        QUENTE = "Quente"
        FRIO = "Frio"

    class TipoTurismo(models.TextChoices):
        NEGOCIOS = "Négocios"
        EVENTOS = "Eventos"
        AVENTURA = "Aventura"
        LAZER = "Lazer"
        MUSEU = "Museu"
        NATUREZA = "Natureza"

    nome = models.CharField(max_length=50)
    imagem = models.URLField(max_length=1024)
    clima = models.CharField(max_length=50, choices=Clima.choices)
    tipo_turismo = models.CharField(max_length=50, choices=TipoTurismo.choices)

    def __str__(self):
        return self.nome
