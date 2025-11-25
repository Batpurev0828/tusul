input_file = open('frontend/bin/input.txt', 'r')
output_file = open('frontend/bin/output.txt', 'w')

for line in input_file:
    # Split into MathJax blocks
    parts = line.split(r"\newline")

    for part in parts:
        part = part.strip()
        if not part:
            continue

        # Escape backslashes: \ → \\
        escaped = part.replace("\\", "\\\\")

        # Write MathJax block
        output_file.write(f'<MathJax>{{"$ {escaped} $"}}</MathJax>\n')

input_file.close()
output_file.close()
