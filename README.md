# agrotec-sustentavel
Projeto Agrinho 2026 - Agro forte, futuro sustentável.
class Fazenda:
    def __init__(self, nome, cultura, area, agua_utilizada):
        self.nome = nome
        self.cultura = cultura
        self.area = area
        self.agua_utilizada = agua_utilizada

    def indice_sustentabilidade(self):
        consumo_por_hectare = self.agua_utilizada / self.area

        if consumo_por_hectare <= 1000:
            return "Excelente"
        elif consumo_por_hectare <= 2000:
            return "Bom"
        else:
            return "Necessita Melhorias"

    def exibir_relatorio(self):
        print("\n===== RELATÓRIO DA FAZENDA =====")
        print(f"Propriedade: {self.nome}")
        print(f"Cultura: {self.cultura}")
        print(f"Área Plantada: {self.area} ha")
        print(f"Consumo de Água: {self.agua_utilizada} litros")
        print(f"Sustentabilidade: {self.indice_sustentabilidade()}")
        print("================================")


fazendas = []

def cadastrar_fazenda():
    print("\n--- Cadastro de Fazenda ---")

    nome = input("Nome da propriedade: ")
    cultura = input("Cultura principal: ")
    area = float(input("Área plantada (ha): "))
    agua = float(input("Consumo de água (litros): "))

    fazenda = Fazenda(nome, cultura, area, agua)
    fazendas.append(fazenda)

    print("Cadastro realizado com sucesso!")

def listar_fazendas():
    if not fazendas:
        print("\nNenhuma fazenda cadastrada.")
        return

    for fazenda in fazendas:
        fazenda.exibir_relatorio()

def dicas_sustentaveis():
    print("\n===== DICAS SUSTENTÁVEIS =====")
    print("✓ Utilizar irrigação por gotejamento")
    print("✓ Fazer rotação de culturas")
    print("✓ Aproveitar água da chuva")
    print("✓ Utilizar adubação orgânica")
    print("✓ Preservar áreas de mata nativa")
    print("=============================")

def menu():
    while True:
        print("\n")
        print("🌱 AGRO FORTE - FUTURO SUSTENTÁVEL")
        print("1 - Cadastrar Fazenda")
        print("2 - Ver Relatórios")
        print("3 - Dicas Sustentáveis")
        print("4 - Sair")

        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            cadastrar_fazenda()

        elif opcao == "2":
            listar_fazendas()

        elif opcao == "3":
            dicas_sustentaveis()

        elif opcao == "4":
            print("Encerrando sistema...")
            break

        else:
            print("Opção inválida!")

if __name__ == "__main__":
    menu()
