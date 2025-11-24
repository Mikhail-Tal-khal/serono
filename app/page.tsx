"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Package,
  Plane,
  Warehouse,
  FileCheck,
  TrendingUp,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#8B1538]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-slider absolute inset-0 flex">
            <div className="hero-slide absolute inset-0 bg-[url('/shipping-containers-port.png')] opacity-20 bg-cover bg-center" />
            <div className="hero-slide absolute inset-0 bg-[url('/modern-shipping-port-containers.jpg')] opacity-20 bg-cover bg-center" />
            <div className="hero-slide absolute inset-0 bg-[url('/cargo-ship-at-sea.jpg')] opacity-20 bg-cover bg-center" />
            <div className="hero-slide absolute inset-0 bg-[url('/freight-forwarding-warehouse.jpg')] opacity-20 bg-cover bg-center" />
          </div>
        </div>

        {/* Gold accent stripe at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37]" />

        <nav className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/image.png"
                alt="SERENO Logo"
                width={70}
                height={70}
                className="object-contain"
                priority
              />
              <div className="text-white">
                <div className="text-2xl font-bold tracking-tight">SERENO</div>
                <div className="text-sm opacity-95 tracking-wide">CLEARING & FORWARDING LTD</div>
              </div>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="hidden md:flex bg-[#D4AF37] hover:bg-[#C5A028] text-[#8B1538] font-semibold"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">
              Mombasa's Trusted Logistics Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              We Clear, Move, and Deliver Faster Than Industry Standards
            </h1>
            <p className="text-xl text-white/95 mb-8 text-pretty leading-relaxed">
              Streamlined logistics solutions for seamless customs clearing, freight forwarding, and cargo management
              across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-[#D4AF37] hover:bg-[#C5A028] text-[#8B1538] font-semibold"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-medium"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Gold accent stripe at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#D4AF37]" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Comprehensive Logistics Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end services designed to simplify your supply chain and accelerate your operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Customs Clearing</h3>
              <p className="text-muted-foreground mb-4">
                Seamless import and export clearing with full regulatory compliance and documentation support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Import Clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Export Clearing</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Freight Forwarding</h3>
              <p className="text-muted-foreground mb-4">
                Expert management of your cargo's journey from origin to destination, by air, sea, or land.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>International Shipping</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-secondary/30 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Cargo Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Professional cargo consolidation and port handling services for maximum efficiency.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Cargo Consolidation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Port Handling</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Warehouse className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Warehousing</h3>
              <p className="text-muted-foreground mb-4">
                Secure storage solutions for your inventory with flexible options and strategic locations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Safe & Secure Facilities</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Logistics Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Strategic insights and personalized consulting to optimize your supply chain processes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Expert Guidance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="why-slider absolute inset-0 flex">
            <div className="why-slide absolute inset-0 bg-[url('/logistics-operations-warehouse.jpg')] bg-cover bg-center" />
            <div className="why-slide absolute inset-0 bg-[url('/customs-clearance-documents.jpg')] bg-cover bg-center" />
            <div className="why-slide absolute inset-0 bg-[url('/freight-container-shipping.jpg')] bg-cover bg-center" />
            <div className="why-slide absolute inset-0 bg-[url('/shipping-containers-port.png')] bg-cover bg-center" />
            <div className="why-slide absolute inset-0 bg-[url('/cargo-ship-at-sea.jpg')] bg-cover bg-center" />
            <div className="why-slide absolute inset-0 bg-[url('/freight-forwarding-warehouse.jpg')] bg-cover bg-center" />
          </div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-background/60 to-background/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose SERENO?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With decades of experience in East African logistics, we deliver faster, smarter, and more reliable
                solutions tailored to your business needs.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">Faster Processing</h3>
                    <p className="text-muted-foreground">
                      We exceed industry standards with rapid customs clearance and cargo delivery.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">Expert Knowledge</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of regional regulations and customs procedures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock assistance to keep your supply chain moving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-shipping-port-containers.jpg"
                alt="Port operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8B1538] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37]" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Logistics?</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Partner with us for faster, smarter, and more reliable logistics solutions.
          </p>
          <Button
            size="lg"
            className="group bg-[#D4AF37] hover:bg-[#C5A028] text-[#8B1538] font-semibold"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#D4AF37]" />
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">Send us a message and we'll respond as soon as possible</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">Phone</h3>
                      <a
                        href="tel:+254111842690"
                        className="text-muted-foreground hover:text-[#8B1538] transition-colors"
                      >
                        +254 11 184 2690
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri, 8AM-6PM EAT</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">Email</h3>
                      <a
                        href="mailto:Serenoclearing@Gmail.Com"
                        className="text-muted-foreground hover:text-[#8B1538] transition-colors break-all"
                      >
                        Serenoclearing@Gmail.Com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-[#8B1538]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">Office Location</h3>
                      <p className="text-muted-foreground">
                        Makadara Building
                        <br />
                        P.O Box 89413
                        <br />
                        Mombasa G.P.O, Kenya
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-0 border-border bg-card overflow-hidden">
                  <div className="relative w-full h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8349772088!2d39.6642!3d-4.0547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMTYuOSJTIDM5wrAzOSc1MS4xIkU!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sereno Clearing & Forwarding Office Location"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-[#8B1538]/5">
                    <a
                      href="https://www.google.com/maps/dir//Makadara+Building,+Mombasa/@-4.0547,39.6642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8B1538] hover:text-[#6D1029] font-medium text-sm flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions to Our Office
                    </a>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="p-8 border-border bg-card shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 XXX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us about your logistics needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-32 resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#8B1538] hover:bg-[#6B0F28] text-white font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                <div className="hidden lg:block mt-8 relative h-[200px] rounded-lg overflow-hidden">
                  <div className="form-gallery-slider absolute inset-0 flex">
                    <div className="form-gallery-slide absolute inset-0">
                      <Image
                        src="/shipping-containers-port.png"
                        alt="Shipping containers at port"
                        fill
                        className="object-cover rounded-lg"
                        sizes="50vw"
                      />
                    </div>
                    <div className="form-gallery-slide absolute inset-0">
                      <Image
                        src="/cargo-ship-at-sea.jpg"
                        alt="Cargo ship at sea"
                        fill
                        className="object-cover rounded-lg"
                        sizes="50vw"
                      />
                    </div>
                    <div className="form-gallery-slide absolute inset-0">
                      <Image
                        src="/freight-forwarding-warehouse.jpg"
                        alt="Freight forwarding warehouse"
                        fill
                        className="object-cover rounded-lg"
                        sizes="50vw"
                      />
                    </div>
                    <div className="form-gallery-slide absolute inset-0">
                      <Image
                        src="/logistics-operations-warehouse.jpg"
                        alt="Logistics operations"
                        fill
                        className="object-cover rounded-lg"
                        sizes="50vw"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B1538] text-white py-12 relative">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AF37]" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/images/image.png" alt="SERENO Logo" width={50} height={50} className="object-contain" />
              <div>
                <div className="font-bold text-lg">SERENO CLEARING & FORWARDING LTD</div>
                <div className="text-sm opacity-90">Director: Abdulkadir Mohamed Musa</div>
              </div>
            </div>
            <p className="text-sm text-white/80">© {new Date().getFullYear()} SERENO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
