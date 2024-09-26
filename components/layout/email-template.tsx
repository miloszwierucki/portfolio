import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

// TODO: Change className to style tag - Tailwind doesn't work
const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body className="bg-slate-100 py-2.5 text-base">
        <Container className="w-full max-w-3xl border border-slate-200 bg-white px-5 py-10">
          <Section>
            <Text
              className="text-base font-light leading-6 text-neutral-700"
              style={fontStyle}
            >
              Hi, <br /> New message from{" "}
              <span className="font-normal">{name}</span>
            </Text>

            <Text
              className="whitespace-pre-wrap font-light leading-6 text-neutral-700"
              style={fontStyle}
            >
              {message}
            </Text>

            <Text
              className="text-xs font-light text-neutral-700"
              style={fontStyle}
            >
              From <span className="font-normal">{name}</span>, you can reply to
              this email at
              <br />
              <Link
                className="text-xs text-neutral-700 underline"
                style={fontStyle}
                href={`mailto:${email}`}
              >
                {email}
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const fontStyle = {
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
