import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export const metadata = {
  title: "Termos de Uso - Orizon",
  description: "Termos de uso da plataforma Orizon",
};

export default function TermosPage() {
  return (
    <div className="pt-20">
      <Section className="bg-gray-light py-16 md:py-24">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8"
          >
            <HiArrowLeft size={20} />
            Voltar para o início
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Termos de Uso
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e usar a plataforma Orizon, você concorda em cumprir e estar vinculado
                aos seguintes termos e condições de uso. Se você não concordar com qualquer parte
                destes termos, não deverá usar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">2. Definições</h2>
              <p className="text-gray-700 leading-relaxed">
                &quot;Plataforma&quot; refere-se ao sistema Orizon, incluindo todos os serviços de
                processamento de pagamentos oferecidos. &quot;Usuário&quot; refere-se a qualquer pessoa ou
                entidade que acessa ou utiliza a plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">3. Uso da Plataforma</h2>
              <p className="text-gray-700 leading-relaxed">
                A plataforma Orizon é destinada ao processamento de pagamentos para empresas. O
                usuário concorda em usar a plataforma apenas para fins legítimos e em conformidade
                com todas as leis e regulamentos aplicáveis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">4. Responsabilidades do Usuário</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fornecer informações verdadeiras e precisas</li>
                <li>Manter a segurança das credenciais de acesso</li>
                <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
                <li>Cumprir com todas as regulamentações financeiras aplicáveis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">5. Taxas e Pagamentos</h2>
              <p className="text-gray-700 leading-relaxed">
                As taxas aplicáveis serão informadas antes da contratação dos serviços. A Orizon
                se reserva o direito de modificar suas taxas mediante notificação prévia aos
                usuários.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                A Orizon não se responsabiliza por danos indiretos, incidentais ou consequenciais
                decorrentes do uso ou da impossibilidade de uso da plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">7. Propriedade Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo o conteúdo da plataforma, incluindo textos, gráficos, logos e software, é de
                propriedade da Orizon e protegido por leis de propriedade intelectual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">8. Modificações</h2>
              <p className="text-gray-700 leading-relaxed">
                A Orizon se reserva o direito de modificar estes termos a qualquer momento. As
                modificações entrarão em vigor imediatamente após sua publicação na plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">9. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer
                disputa será resolvida nos tribunais competentes de São Paulo, SP.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">10. Contato</h2>
              <p className="text-gray-700 leading-relaxed">
                Para questões sobre estes termos, entre em contato através do nosso formulário de
                contato ou pelos canais de atendimento disponíveis no site.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-light rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Orizon - Prototype Instituição de Pagamento S.A.</strong>
                <br />
                CNPJ: 35.713.491/0001-00
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}


