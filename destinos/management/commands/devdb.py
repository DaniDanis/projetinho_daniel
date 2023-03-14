from django.core.management.base import BaseCommand

from destinos.models import Atrativos


class Command(BaseCommand):
    help = "Adiciona Atrativos Turisticos ao banco"

    def handle(self, *args, **kwargs):
        atrativos = [
            {
                "nome": "Praia de Copacabana",
                "imagem": "https://images6.alphacoders.com/335/335480.jpg",
                "clima": "Quente",
                "tipo_turismo": "Lazer",
            },
            {
                "nome": "LollaPalooza",
                "imagem": "https://popnow.com.br/wp-content/uploads/2021/02/What-Else-Mag-Cultura-Musica-13-Artistas-Bandas-Lollapalooza-Brasil-2018-Cover.jpg",
                "clima": "Quente",
                "tipo_turismo": "Eventos",
            },
            {
                "nome": "Rock in Rio",
                "imagem": "https://alemdatela.com/wp-content/uploads/2019/09/rir.jpg",
                "clima": "Quente",
                "tipo_turismo": "Eventos",
            },
            {
                "nome": "MASP",
                "imagem": "https://f.i.uol.com.br/fotografia/2017/09/28/150662783259cd50f8c5af9_1506627832_3x2_rt.jpg",
                "clima": "Quente",
                "tipo_turismo": "Museu",
            },
            {
                "nome": "Patagonia",
                "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA7FNQ1k-NhUMtPzWMh6y9-UcDVv3bg9KSEn1Yk1j83OnvKZDBoKbgCuqd2v_cfXclpw&usqp=CAU",
                "clima": "Frio",
                "tipo_turismo": "Natureza",
            },
        ]
        for atrativo in atrativos:
            Atrativos.objects.create(
                nome=atrativo["nome"],
                imagem=atrativo["imagem"],
                clima=atrativo["clima"],
                tipo_turismo=atrativo["tipo_turismo"],
            )
        self.stdout.write(
            self.style.SUCCESS("Atrativos Turisticos criados com sucesso")
        )
