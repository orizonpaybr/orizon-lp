import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Política de Privacidade - Coratri IP S.A.",
  description: "Política de privacidade da plataforma Coratri IP S.A.",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-20">
      <Section className="bg-white py-16 md:py-24">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Política de Privacidade
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Proteção de Dados Pessoais
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A Coratri IP S.A. compromete-se, por si, seus prepostos e profissionais dedicados à prestação dos serviços, a realizar o tratamento dos dados pessoais a que vier a ter acesso por força deste Contrato (&quot;Dados Pessoais&quot;), sempre em conformidade com as melhores práticas de mercado, bem como com o disposto na Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD), no Marco Civil da Internet e na Política de Privacidade do cliente, respeitadas as finalidades ali descritas, envidando seus melhores esforços para garantir a proteção dos Dados Pessoais, especialmente aqueles classificados como Dados Pessoais sensíveis.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-6">
                Compromissos da Coratri IP S.A.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Coratri IP S.A. compromete-se a:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    1. Tratamento conforme instruções
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Realizar o tratamento dos Dados Pessoais exclusivamente de acordo com as instruções do cliente, conforme a autorização recebida e para a finalidade específica de execução deste Contrato, sendo vedada a comercialização ou compartilhamento com terceiros, salvo nos casos expressamente autorizados pelo cliente ou nas hipóteses previstas na legislação aplicável.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    2. Medidas de segurança
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Implementar medidas de segurança técnicas e administrativas adequadas para garantir um nível de proteção eficaz aos Dados Pessoais, prevenindo acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    3. Atendimento aos direitos dos titulares
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Colaborar com o cliente no atendimento às solicitações dos titulares dos Dados Pessoais, incluindo pedidos de acesso, correção, objeção, exclusão e portabilidade, em conformidade com a LGPD e demais normas aplicáveis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    4. Registros de tratamento
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Manter registros das atividades de tratamento de Dados Pessoais e disponibilizá-los ao cliente sempre que solicitado, incluindo informações sobre transferências internacionais e compartilhamento com terceiros.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    5. Comunicação de incidentes
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Comunicar imediatamente ao cliente, por escrito, no prazo máximo de 24 (vinte e quatro) horas a partir do momento em que tomar conhecimento, qualquer tratamento não autorizado ou ilícito de Dados Pessoais, bem como incidentes de segurança envolvendo tais dados — sejam eles acidentais ou intencionais — incluindo acesso, aquisição, uso, alteração ou divulgação não autorizada, vazamento, perda, destruição ou dano, efetivo ou potencial.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Além disso, a Coratri IP S.A. compromete-se a adotar todas as medidas necessárias para conter ou eliminar o incidente e manter o cliente informado sobre as ações corretivas adotadas e seus impactos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    6. Cooperação em investigações
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Permitir e cooperar com eventuais investigações relacionadas a incidentes de segurança conduzidas pelo cliente ou por terceiros por ele contratados, a fim de possibilitar o cumprimento das obrigações legais e regulatórias relativas à proteção de Dados Pessoais, incluindo avaliações de impacto, implementação de medidas corretivas e comunicação às autoridades competentes.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">
                Vigência das obrigações
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As obrigações previstas nesta cláusula permanecerão válidas mesmo após o término ou rescisão deste Contrato, enquanto o cliente ou pessoas por ele autorizadas mantiverem ou realizarem qualquer forma de tratamento de Dados Pessoais obtidos ou coletados em decorrência da execução deste instrumento contratual.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
