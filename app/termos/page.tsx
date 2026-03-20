import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Termos de Uso - Coratri IP S.A.",
  description: "Termos de uso da plataforma Coratri IP S.A.",
};

export default function TermosPage() {
  return (
    <div className="pt-20">
      <Section className="bg-white py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Termos de Uso
          </h1>

          <p className="text-gray-600 mb-8">
            Última atualização: 19/09/2024
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Bem-vindo à Coratri IP S.A.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o aplicativo da Coratri IP S.A., você concorda com os termos e condições descritos abaixo. Por favor, leia atentamente este documento, pois ele define os direitos e responsabilidades de ambas as partes.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">1. Definições</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>&quot;Coratri IP S.A.&quot;:</strong> Refere-se à Coratri IP S.A., instituição de pagamento que oferece serviços de transações financeiras por meio deste aplicativo.</li>
                <li><strong>&quot;Usuário&quot;:</strong> Qualquer pessoa física ou jurídica que utilize o aplicativo da Coratri IP S.A.</li>
                <li><strong>&quot;Aplicativo&quot;:</strong> Refere-se ao software de propriedade da Coratri IP S.A. disponibilizado aos usuários em dispositivos móveis ou outros meios digitais.</li>
                <li><strong>&quot;Serviços&quot;:</strong> Todas as funcionalidades oferecidas pela Coratri IP S.A. por meio do aplicativo, incluindo, mas não se limitando a transferências, pagamentos, consultas de saldo e demais serviços financeiros digitais.</li>
              </ul>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">2. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ao instalar, acessar ou utilizar o aplicativo da Coratri IP S.A., o usuário declara que leu, compreendeu e concorda integralmente com estes Termos de Uso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. reserva-se o direito de modificar estes Termos de Uso a qualquer momento. É responsabilidade do usuário revisá-los periodicamente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                O uso contínuo do aplicativo após eventuais alterações implica na aceitação automática dos novos termos.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">3. Serviços Oferecidos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. disponibiliza serviços financeiros digitais, incluindo:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Realização de transferências e pagamentos;</li>
                <li>Consulta de saldos e extratos;</li>
                <li>Transações por meio de Pix e outros meios de pagamento disponíveis;</li>
                <li>Integração com plataformas e serviços financeiros digitais.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Os serviços poderão ser ampliados, modificados ou descontinuados a qualquer momento, a exclusivo critério da Coratri IP S.A.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">4. Cadastro e Responsabilidades do Usuário</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Para utilizar os serviços da Coratri IP S.A., o usuário deverá realizar cadastro e fornecer informações verdadeiras, completas e atualizadas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O usuário compromete-se a:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Manter seus dados cadastrais atualizados;</li>
                <li>Proteger suas credenciais de acesso (login, senha e autenticações adicionais);</li>
                <li>Não compartilhar suas credenciais com terceiros;</li>
                <li>Notificar imediatamente a Coratri IP S.A. em caso de suspeita de acesso não autorizado à sua conta.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A Coratri IP S.A. não se responsabiliza por perdas decorrentes de falha do usuário em proteger suas credenciais.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">5. Uso Permitido e Proibições</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                O usuário compromete-se a utilizar o aplicativo exclusivamente para fins lícitos e em conformidade com estes Termos de Uso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                É expressamente proibido utilizar o aplicativo para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Atividades ilegais, fraudulentas ou que violem a legislação vigente;</li>
                <li>Tentativas de invasão, fraude ou exploração de vulnerabilidades do sistema;</li>
                <li>Engenharia reversa, cópia ou exploração indevida do software;</li>
                <li>Uso do aplicativo para práticas que violem normas regulatórias do sistema financeiro.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                A Coratri IP S.A. poderá suspender ou encerrar contas que violem estes termos.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">6. Privacidade e Proteção de Dados</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. está comprometida com a proteção da privacidade e dos dados pessoais dos usuários.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O tratamento de dados é realizado em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Nossa Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações dos usuários.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o aplicativo, o usuário concorda com o tratamento de seus dados conforme descrito nesta política.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">7. Tarifas e Encargos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Determinados serviços disponibilizados pela Coratri IP S.A. podem estar sujeitos à cobrança de tarifas ou encargos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                As tarifas aplicáveis serão informadas previamente ao usuário ou no momento da realização da transação.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A Coratri IP S.A. poderá atualizar ou alterar as tarifas mediante comunicação prévia.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">8. Limitações de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. empenha-se em fornecer serviços seguros, eficientes e contínuos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                No entanto, não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Indisponibilidade temporária do aplicativo por motivos técnicos, manutenção ou atualização;</li>
                <li>Falhas decorrentes de serviços prestados por terceiros;</li>
                <li>Perdas financeiras decorrentes de fatores externos ou fora de seu controle;</li>
                <li>Danos indiretos, lucros cessantes ou perda de dados decorrentes do uso do aplicativo.</li>
              </ul>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">9. Suspensão e Cancelamento de Serviços</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. poderá suspender ou cancelar o acesso do usuário aos serviços nas seguintes hipóteses:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Violação destes Termos de Uso;</li>
                <li>Suspeita de fraude, lavagem de dinheiro ou atividades ilícitas;</li>
                <li>Determinação regulatória ou legal;</li>
                <li>Necessidade operacional ou manutenção do sistema.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Sempre que possível, o usuário será previamente notificado.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">10. Alterações no Aplicativo</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                A Coratri IP S.A. poderá, a qualquer momento, modificar, suspender ou descontinuar funcionalidades do aplicativo, com ou sem aviso prévio.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A empresa não será responsável por eventuais impactos decorrentes dessas alterações.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">11. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Todos os direitos relativos ao aplicativo da Coratri IP S.A., incluindo software, design, logotipos, sistemas e conteúdos, são de propriedade exclusiva da empresa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                O uso do aplicativo não concede ao usuário qualquer direito sobre a propriedade intelectual da Coratri IP S.A.
              </p>
              <p className="text-gray-700 leading-relaxed">
                É proibida qualquer reprodução, distribuição ou modificação do aplicativo sem autorização expressa.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">12. Legislação Aplicável e Foro</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fica eleito o foro da Comarca de São Paulo – SP, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias decorrentes destes termos.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Contato</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Em caso de dúvidas sobre estes Termos de Uso ou sobre os serviços da Coratri IP S.A., entre em contato:
              </p>
              <p className="text-gray-700 leading-relaxed">
                📧 <a href="mailto:sac@coratri.com" className="text-primary hover:text-primary-hover">sac@coratri.com</a>
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
