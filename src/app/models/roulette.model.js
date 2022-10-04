module.exports = mongoose => {
  const Roulette = mongoose.model(
    "roulette",
    mongoose.Schema(
      {
        Username: String,
        Result: String,
        Occurred: Date
      },
      { timestamps: true,
        collection: 'roulette' },
    )
  );

  return Roulette;
};