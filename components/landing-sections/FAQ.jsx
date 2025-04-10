import { faqs } from "@/data/datas";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-[#1f1d1d] text-white py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold font-space-grotesk mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center justify-between bg-[#2a2a2a] py-4 px-6 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#444]">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-[#2a2a2a] py-4 px-6 rounded-md text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
