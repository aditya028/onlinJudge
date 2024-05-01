# Use the official Go image with a version that supports the package
FROM golang:1.18-alpine

# Set the Current Working Directory inside the container
WORKDIR /app

# Install g++ compiler and other dependencies
RUN apk add --no-cache gcc g++ make

# Copy go mod and sum files
COPY go.mod go.mod
COPY go.sum go.sum

# Download all dependencies
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .


# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the executable
CMD ["go" , "run" , "main.go"]