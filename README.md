# agrotec-sustentavel
Projeto Agrinho 2026 - Agro forte, futuro sustentável.
import datetime

# Banco de dados simulado
culturas = []

# Função para cadastrar uma nova plantação
def cadastrar_plantacao():
    nome = input("Nome da cultura: ")
    area = float(input("Área plantada (ha): "))
    irrigacao = input("Tipo de irrigação (gotejamento/sprinkler/nenhuma): ")
    fertilizante = input("Fertilizante utilizado (orgânico/químico/nenhum): ")
    data_plantio = input("Data de plantio (AAAA-MM-DD): ")
    
    plantacao = {
        "nome": nome,
        "area": area,
        "irrigacao": irrigacao,
        "fertilizante": fertilizante,
        "data_plantio": datetime.datetime.strptime(data_plantio, "%Y-%m-%d")
    }
    
    culturas.append(plantacao)
    print(f"Cultura {nome} cadastrada com sucesso!\n")

# Função para gerar relatório sustentável
def relatorio_sustentavel():
    print("\n--- Relatório Sustentável ---")
    total_area = sum(c["area"] for c in culturas)
    org_fertil = sum(1 for c in culturas if c["fertilizante"] == "orgânico")
    
    print(f"Total de áreas cultivadas: {total_area:.2f} ha")
    print(f"Número de culturas com fertilizante orgânico: {org_fertil}")
    
    for c in culturas:
        print(f"{c['nome']} - Irrigação: {c['irrigacao']} - Fertilizante: {c['fertilizante']}")

# Função principal
def menu():
    while True:
        print("\n--- Agro Forte: Futuro Sustentável ---")
        print("1. Cadastrar plantação")
        print("2. Gerar relatório sustentável")
        print("3. Sair")
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            cadastrar_plantacao()
        elif opcao == "2":
            relatorio_sustentavel()
        elif opcao == "3":
            print("Saindo do sistema...")
            break
        else:
            print("Opção inválida! Tente novamente.")

if __name__ == "__main__":
    menu()
