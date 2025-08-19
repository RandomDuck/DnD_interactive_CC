import StyledComponentsRegistry from './styled-components.registry';

export const metadata = {
  title: "D&D Character sheet",
  description: "A digital character sheet for D&D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ padding: '1em' }}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
