import { IconX } from "@tabler/icons-react";
import { useState } from "react";

export function AreasSection() {
  const [isCivelModalOpen, setIsCivelModalOpen] = useState(false);
  const [isEleitoralModalOpen, setIsEleitoralModalOpen] = useState(false);
  const [isAdministrativoModalOpen, setIsAdministrativoModalOpen] =
    useState(false);

  function openCivelModal() {
    setIsCivelModalOpen(true);
  }

  function closeCivelModal() {
    setIsCivelModalOpen(false);
  }

  function openEleitoralModal() {
    setIsEleitoralModalOpen(true);
  }

  function closeEleitoralModal() {
    setIsEleitoralModalOpen(false);
  }

  function openAdministrativoModal() {
    setIsAdministrativoModalOpen(true);
  }

  function closeAdministrativoModal() {
    setIsAdministrativoModalOpen(false);
  }

  return (
    <section id="areas" className="p-9 flex flex-col mb-9 md:mb-0">
      <div>
        <img
          src="/thay.png"
          alt=""
          className="w-full object-cover h-64"
        />
      </div>

      <div className="flex flex-col items-center mt-4 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-4xl">Áreas de atuação:</h2>
          <p className="w-full md:w-[640px]">
            Abaixo, você encontrará mais detalhes sobre cada uma dessas áreas e
            como podemos te ajudar a encontrar as melhores soluções jurídicas
            para as suas necessidades. Explore as especialidades em que atuamos
            para conhecer melhor nossos serviços.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <button
            className="btn w-full md:w-auto hover:bg-zinc-500 transition ease-in-out"
            onClick={openCivelModal}
          >
            Cível
          </button>
          <button
            className="btn w-full md:w-auto hover:bg-zinc-500 transition ease-in-out"
            onClick={openEleitoralModal}
          >
            Eleitoral
          </button>
          <button
            className="btn w-full md:w-auto hover:bg-zinc-500 transition ease-in-out"
            onClick={openAdministrativoModal}
          >
            Administrativo
          </button>
        </div>

        <div>
          {isCivelModalOpen && (
            <div className="fixed inset-0 bg-zinc-300/60 flex items-center justify-center">
              <div className="w-[640px] rounded-lg py-6 px-6 shadow-md bg-zinc-200">
                <div className="flex items-center justify-between flex-col space-y-6">
                  <h3 className="text-lg font-semibold">Cível</h3>
                  <p>
                    O Direito Cível abrange uma vasta gama de questões que
                    afetam diretamente a vida das pessoas e as relações
                    jurídicas entre elas. Nossa atuação nessa área inclui a
                    resolução de conflitos envolvendo contratos, indenizações,
                    direitos de propriedade, família e sucessões. Trabalhamos
                    para garantir que seus direitos sejam protegidos e que você
                    receba o suporte necessário em situações como divórcios,
                    disputas contratuais e outras demandas civis.
                  </p>
                  <button onClick={closeCivelModal} className="btn hover:bg-zinc-500 transition ease-in-out">
                    <IconX size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {isEleitoralModalOpen && (
            <div className="fixed inset-0 bg-zinc-300/60 flex items-center justify-center">
              <div className="w-[640px] rounded-lg py-6 px-6 shadow-md bg-zinc-200">
                <div className="flex items-center justify-between flex-col space-y-6">
                  <h3 className="text-lg font-semibold">Eleitoral</h3>
                  <p>
                    O Direito Eleitoral é fundamental para a manutenção da
                    democracia e a garantia de processos eleitorais justos e
                    transparentes. Atuamos na orientação e defesa de candidatos,
                    partidos políticos e eleitores em questões relacionadas às
                    eleições, incluindo registro de candidaturas, impugnação de
                    mandatos e propaganda eleitoral. Nossa missão é assegurar o
                    cumprimento da legislação eleitoral, protegendo seus
                    direitos e interesses durante todo o processo eleitoral.
                  </p>
                  <button onClick={closeEleitoralModal} className="btn hover:bg-zinc-500 transition ease-in-out">
                    <IconX size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {isAdministrativoModalOpen && (
            <div className="fixed inset-0 bg-zinc-300/60 flex items-center justify-center">
              <div className="w-[640px] rounded-lg py-6 px-6 shadow-md bg-zinc-200">
                <div className="flex items-center justify-between flex-col space-y-6">
                  <h3 className="text-lg font-semibold">Administrativo</h3>
                  <p>
                    O Direito Administrativo é crucial para a organização das
                    relações entre os cidadãos e a administração pública. Ele
                    garante que as ações do poder público sejam realizadas de
                    forma justa e transparente, protegendo os direitos dos
                    particulares e assegurando que os princípios legais sejam
                    respeitados em todas as esferas governamentais.
                  </p>
                  <button onClick={closeAdministrativoModal} className="btn hover:bg-zinc-500 transition ease-in-out">
                    <IconX size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
