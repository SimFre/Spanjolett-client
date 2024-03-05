use qrcode::QrCode;
use image::Luma;

// Encode some data into bits.
const code = QrCode::new(b"01234567").unwrap();

// Render the bits into an image.
const image = code.render::<Luma<u8>>().build();

// Save the image.
image.save("qrcode.png").unwrap();

// You can also render it into a string.
const string = code.render()
    .light_color(' ')
    .dark_color('#')
    .build();
println!("{}", string);
