import { Container, Heading, Text, Link, Section } from "@radix-ui/themes";

export default function PrivacyPage() {
  return (
    <Section size="2" style={{ minHeight: "60vh" }}>
      <Container size="3" px="5" py="6">
        <Heading size="6" mb="4">
          Privacy Policy
        </Heading>
        <Text as="p" mb="3">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and
          protect your personal data when you sign up on our platform.
        </Text>
        <Heading size="4" mb="2">
          1. Data We Collect
        </Heading>
        <Text as="p" mb="3">
          We collect the following personal data when you sign up:
        </Text>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            <b>Name</b>: To personalise communication with you.
          </li>
          <li>
            <b>Email Address</b>: To send you updates and information about our project.
          </li>
        </ul>
        <Text as="p" mb="3">
          We do not require you to provide any other personal details.
        </Text>
        <Heading size="4" mb="2">
          2. How We Use Your Data
        </Heading>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            <b>Communication</b>: To send you updates and information about our project using a
            professional email management tool (such as Mailchimp) that complies with all applicable
            data protection regulations.
          </li>
        </ul>
        <Text as="p" mb="3">
          <i>You can opt out of these communications at any time.</i>
        </Text>
        <Heading size="4" mb="2">
          3. Legal Basis for Processing Your Data
        </Heading>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            <b>Consent</b>: We process your data based on your consent when you sign up. You can
            withdraw your consent at any time by clicking “unsubscribe” in our emails.
          </li>
        </ul>
        <Heading size="4" mb="2">
          4. Data Retention
        </Heading>
        <Text as="p" mb="3">
          We retain your data only for as long as necessary to send you updates and information. If
          you wish to have your data deleted, you can contact us at{" "}
          <Link href="mailto:nomadeercompany@gmail.com">nomadeercompany@gmail.com</Link>.
        </Text>
        <Heading size="4" mb="2">
          5. Data Sharing
        </Heading>
        <Text as="p" mb="3">
          We do not share your personal data with third parties, except as required by law or for
          the purpose of managing communications through our email management tool, which operates
          in compliance with all relevant data protection regulations.
        </Text>
        <Heading size="4" mb="2">
          6. Your Rights
        </Heading>
        <Text as="p" mb="3">
          Under GDPR, you have the right to:
        </Text>
        <ul style={{ marginBottom: "1.5rem" }}>
          <li>
            <b>Access</b>: Request a copy of your personal data.
          </li>
          <li>
            <b>Rectify</b>: Correct inaccuracies in your data.
          </li>
          <li>
            <b>Delete</b>: Request the deletion of your data.
          </li>
          <li>
            <b>Restrict Processing</b>: Limit how your data is used.
          </li>
          <li>
            <b>Object</b>: Stop receiving communications.
          </li>
        </ul>
        <Text as="p" mb="3">
          To exercise your rights, contact us at{" "}
          <Link href="mailto:nomadeercompany@gmail.com">nomadeercompany@gmail.com</Link>.
        </Text>
        <Heading size="4" mb="2">
          7. Security
        </Heading>
        <Text as="p" mb="3">
          We implement technical and organizational measures to protect your data, including secure
          storage and limited access.
        </Text>
        <Heading size="4" mb="2">
          8. Updates to This Policy
        </Heading>
        <Text as="p" mb="3">
          We may update this policy to reflect changes in our practices. The latest version will
          always be available on our website.
        </Text>
        <Heading size="4" mb="2">
          9. Contact Us
        </Heading>
        <Text as="p" mb="3">
          If you have questions or concerns about this Privacy Policy or your data, please contact
          us at <Link href="mailto:nomadeercompany@gmail.com">nomadeercompany@gmail.com</Link>.
        </Text>
      </Container>
    </Section>
  );
}
