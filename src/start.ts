export const main = () => {
    throw new Error("UNIMPLEMENTED")
}

// Called directly
if (require.main === module) {
    main();
}