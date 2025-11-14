import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { MessageSquare, Send, AlertTriangle, HelpCircle } from "lucide-react";

const CustomerCare = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [reportData, setReportData] = useState({
    issueType: "",
    orderId: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by going to the 'My Orders' page and clicking on 'Track Order' for the specific order you want to track.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most products. Items must be unused and in original packaging. Contact us to initiate a return.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping is available for 2-3 business days delivery.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times vary by location.",
    },
    {
      question: "How can I cancel my order?",
      answer: "You can cancel your order within 24 hours of placing it by contacting customer support or visiting the 'My Orders' page.",
    },
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) {
      toast.error("Please enter a message");
      return;
    }
    toast.success("Message sent!", {
      description: "Our team will respond shortly.",
    });
    setChatMessage("");
  };

  const validateReportForm = () => {
    const newErrors: Record<string, string> = {};

    if (!reportData.issueType) {
      newErrors.issueType = "Please select an issue type";
    }

    if (!reportData.orderId.trim()) {
      newErrors.orderId = "Order ID is required";
    }

    if (!reportData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (reportData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateReportForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    toast.success("Issue reported successfully!", {
      description: "We'll investigate and get back to you soon.",
    });
    setReportData({ issueType: "", orderId: "", description: "" });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Customer Care</h1>
          <p className="text-muted-foreground">
            We're here to help! Choose how you'd like to reach us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Chat Box */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Quick Chat
              </CardTitle>
              <CardDescription>
                Send us a quick message and we'll respond as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="min-h-[200px] p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Chat messages will appear here
                  </p>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report Issue Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Report an Issue
              </CardTitle>
              <CardDescription>
                Having a problem? Let us know and we'll help resolve it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="issueType">Issue Type</Label>
                  <Select
                    value={reportData.issueType}
                    onValueChange={(value) =>
                      setReportData((prev) => ({ ...prev, issueType: value }))
                    }
                  >
                    <SelectTrigger
                      className={errors.issueType ? "border-destructive" : ""}
                    >
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Order Issue</SelectItem>
                      <SelectItem value="payment">Payment Issue</SelectItem>
                      <SelectItem value="product">Product Quality</SelectItem>
                      <SelectItem value="delivery">Delivery Issue</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.issueType && (
                    <p className="text-sm text-destructive">{errors.issueType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderId">Order ID (if applicable)</Label>
                  <Input
                    id="orderId"
                    placeholder="ORD-2024-001"
                    value={reportData.orderId}
                    onChange={(e) =>
                      setReportData((prev) => ({ ...prev, orderId: e.target.value }))
                    }
                    className={errors.orderId ? "border-destructive" : ""}
                  />
                  {errors.orderId && (
                    <p className="text-sm text-destructive">{errors.orderId}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Please describe your issue in detail..."
                    value={reportData.description}
                    onChange={(e) =>
                      setReportData((prev) => ({ ...prev, description: e.target.value }))
                    }
                    className={errors.description ? "border-destructive" : ""}
                    rows={4}
                  />
                  {errors.description && (
                    <p className="text-sm text-destructive">{errors.description}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              Frequently Asked Questions
            </CardTitle>
            <CardDescription>
              Find quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerCare;
