import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "How is this different from regular audio guides?",
    answer:
      "Unlike pre-recorded audio guides, our tours feature real live guides who speak directly to you in real-time. You can ask questions, request specific stories, and get personalized recommendations based on your interests.",
  },
  {
    question: "Do I need to follow a specific route or schedule?",
    answer:
      "Not at all! You have complete freedom to explore at your own pace. The guide adapts to where you are and what you want to see. Start when you want, take breaks, or even change direction mid-tour.",
  },
  {
    question: "How much will tours cost?",
    answer:
      "We're designing tours to be significantly more affordable than traditional private guides while maintaining the personal touch. Pricing will be announced when we launch - join our waitlist to be the first to know!",
  },
  {
    question: "What if I have poor cell service or my battery dies?",
    answer:
      "Tours are designed to work with basic phone connectivity. We're also exploring offline backup options and battery-saving features to ensure you never miss the story.",
  },
  {
    question: "Can I tour places where there are no local guides?",
    answer:
      "Yes! That's one of our key innovations. Expert guides can lead tours remotely, opening up experiences in locations that traditionally wouldn't have guided tours available.",
  },
  {
    question: "When will this be available?",
    answer:
      "We're currently in development and testing phase. Join our waitlist to get early access and help shape the experience with your feedback!",
  },
];

export const FrequentlyAskedQuestions = () => {
  return (
    <Container size="3" p="7">
      <Flex direction="column" align="center" gap="6">
        <Heading size="8" align="center" mb="4">
          Frequently Asked Questions
        </Heading>

        <Accordion.Root type="single" collapsible style={{ width: "100%", maxWidth: "800px" }}>
          {faqData.map((item, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              style={{
                borderBottom: "1px solid var(--gray-6)",
                marginBottom: "8px",
              }}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <Text size="4" weight="medium" color="gray" highContrast>
                    {item.question}
                  </Text>
                  <ChevronDownIcon
                    style={{
                      width: "20px",
                      height: "20px",
                      transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      color: "var(--amber-9)",
                      transformOrigin: "center",
                    }}
                    className="accordion-chevron"
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content
                style={{
                  overflow: "hidden",
                  paddingRight: "24px",
                }}
                className="accordion-content"
              >
                <div
                  style={{
                    paddingBottom: "16px",
                  }}
                >
                  <Text size="3" color="gray">
                    {item.answer}
                  </Text>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Flex>
    </Container>
  );
};
