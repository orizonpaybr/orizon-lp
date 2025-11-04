import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
// import Link from "next/link";
// import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Política de Privacidade - Orizon",
  description: "Política de privacidade da plataforma Orizon",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-light py-16 md:py-24">
        <Container>
          {/* <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8"
          >
            <HiArrowLeft size={20} />
            Voltar para o início
          </Link> */}

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Política de Privacidade
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                A Orizon Pay compromete-se, por si, seus prepostos e profissionais dedicados à prestação dos serviços, a realizar o tratamento dos dados pessoais a que vier a ter acesso por força deste Contrato (&quot;Dados Pessoais&quot;), sempre em atenção às melhores práticas de mercado, assim como ao disposto na Lei nº 13.709/2018 (&quot;Lei Geral de Proteção de Dados Pessoais&quot; ou &quot;LGPD&quot;), no Marco Civil da Internet e na Política de Privacidade do cliente, respeitadas as finalidades ali descritas, bem como a envidar seus melhores esforços na proteção dos Dados Pessoais, em especial os Dados Pessoais sensíveis.
              </p>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-6">Compromissos da Orizon Pay</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                A Orizon Pay se compromete a:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  Realizar o tratamento dos Dados Pessoais somente segundo as instruções do cliente, de acordo com a autorização recebida e para a finalidade exclusiva de execução deste Contrato, sendo vedadas a comercialização e o compartilhamento com terceiros, exceto em casos expressamente autorizados e nas hipóteses previstas na legislação aplicável;
                </li>
                <li>
                  Implementar medidas de segurança, técnicas e administrativas adequadas para garantir um nível de segurança efetivo à proteção dos Dados Pessoais contra acessos não autorizados e incidentes envolvendo destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito;
                </li>
                <li>
                  Colaborar com o cliente na efetivação dos direitos dos titulares dos Dados Pessoais quando solicitado, incluindo pedidos de acesso, correção, objeção, exclusão e portabilidade de dados, em consonância com a LGPD e demais legislação aplicável;
                </li>
                <li>
                  Manter registros e comunicar ao cliente, sempre que solicitado, suas atividades de tratamento dos Dados Pessoais, incluindo registros de transferências internacionais e compartilhamento com terceiros;
                </li>
                <li>
                  Comunicar imediatamente ao cliente, por escrito, em prazo não superior a 24 (vinte e quatro) horas do momento em que tomar conhecimento, sobre qualquer tratamento não autorizado ou ilícito dos Dados Pessoais, bem como sobre incidentes de segurança envolvendo Dados Pessoais, sejam estes acidentais ou não — incluindo acesso, aquisição, uso, alteração ou divulgação não autorizados, ou ainda vazamento, perda, destruição ou danos a Dados Pessoais, efetivo ou potencial —, além de adotar todas as medidas necessárias para eliminar ou conter o incidente e manter o cliente informado das medidas de correção e impactos decorrentes;
                </li>
                <li>
                  Permitir e cooperar com investigações de incidentes, realizadas pelo cliente ou por terceiros contratados por ele, de forma a possibilitar ao cliente o cumprimento de suas obrigações relativas à segurança dos Dados Pessoais, inclusive através da implementação de medidas corretivas, avaliações de impacto de risco e resposta às autoridades competentes.
                </li>
              </ul>
            </section>

            <div className="border-t border-gray-300 my-8"></div>

            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                As obrigações desta cláusula permanecem válidas mesmo após o término do Contrato, enquanto o cliente e as pessoas por ele autorizadas mantiverem ou realizarem qualquer forma de tratamento de Dados Pessoais obtidos e/ou coletados em função da execução deste Contrato.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
